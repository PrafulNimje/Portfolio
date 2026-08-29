import { useState } from 'react';

export default function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const snippets = [
    {
      title: 'Clean Architecture / CQRS Handler',
      lang: 'C#',
      fileName: 'CreateAdmissionCommandHandler.cs',
      description: 'Domain-Driven CQRS pattern in ASP.NET Core with validation, repository abstraction, and event dispatching.',
      code: `public class CreateAdmissionCommandHandler : IRequestHandler<CreateAdmissionCommand, Result<AdmissionResponseDto>>
{
    private readonly IAdmissionRepository _admissionRepo;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IEmailNotificationService _notificationService;
    private readonly ILogger<CreateAdmissionCommandHandler> _logger;

    public CreateAdmissionCommandHandler(
        IAdmissionRepository admissionRepo,
        IUnitOfWork unitOfWork,
        IEmailNotificationService notificationService,
        ILogger<CreateAdmissionCommandHandler> logger)
    {
        _admissionRepo = admissionRepo;
        _unitOfWork = unitOfWork;
        _notificationService = notificationService;
        _logger = logger;
    }

    public async Task<Result<AdmissionResponseDto>> Handle(
        CreateAdmissionCommand request, 
        CancellationToken cancellationToken)
    {
        // 1. Domain Validation & Duplicate Check
        var isDuplicate = await _admissionRepo.ExistsByEmailOrAadhaarAsync(
            request.Email, request.AadhaarNumber, cancellationToken);
            
        if (isDuplicate)
            return Result<AdmissionResponseDto>.Failure("An application with these credentials already exists.");

        // 2. Instantiate Aggregate Root
        var admission = Admission.Create(
            studentName: request.FullName,
            courseId: request.CourseId,
            batchId: request.BatchId,
            documents: request.UploadedDocuments);

        await _admissionRepo.AddAsync(admission, cancellationToken);
        await _unitOfWork.SaveChangesAsync(cancellationToken);

        // 3. Dispatch Notification Event
        await _notificationService.SendAdmissionAcknowledgementAsync(admission.Id, admission.Email);

        _logger.LogInformation("Admission record {AdmissionId} successfully created for {StudentName}", admission.Id, request.FullName);

        return Result<AdmissionResponseDto>.Success(admission.ToDto());
    }
}`,
    },
    {
      title: 'Optimized Stored Procedure with Indexing',
      lang: 'SQL',
      fileName: 'sp_GenerateBatchAttendanceReport.sql',
      description: 'High-performance parameterized SQL procedure with table hints, CTEs, and aggregated geotag session verification.',
      code: `-- =========================================================================
-- Author:      Prafull Nimje
-- Description: Aggregated Student Attendance & Geotag Verification Report
-- Performance: Optimized with Covered Non-Clustered Indexes (20% speedup)
-- =========================================================================
CREATE OR ALTER PROCEDURE dbo.sp_GenerateBatchAttendanceReport
    @BatchId INT,
    @StartDate DATE,
    @EndDate DATE,
    @MinAttendanceThreshold DECIMAL(5,2) = 75.00
AS
BEGIN
    SET NOCOUNT ON;

    ;WITH BatchStudents AS (
        SELECT 
            s.StudentId,
            s.EnrollmentNumber,
            s.FullName,
            s.Email,
            b.BatchName,
            b.TotalRequiredSessions
        FROM dbo.Students s WITH (NOLOCK)
        INNER JOIN dbo.BatchEnrollments be WITH (NOLOCK) ON s.StudentId = be.StudentId
        INNER JOIN dbo.Batches b WITH (NOLOCK) ON be.BatchId = b.BatchId
        WHERE be.BatchId = @BatchId AND be.IsActive = 1
    ),
    AttendanceSummary AS (
        SELECT 
            att.StudentId,
            COUNT(att.SessionId) AS TotalAttendedSessions,
            COUNT(CASE WHEN att.IsGeotagVerified = 1 THEN 1 END) AS VerifiedGeoSessions
        FROM dbo.StudentAttendance att WITH (NOLOCK)
        WHERE att.BatchId = @BatchId 
          AND att.SessionDate BETWEEN @StartDate AND @EndDate
        GROUP BY att.StudentId
    )
    SELECT 
        bs.StudentId,
        bs.EnrollmentNumber,
        bs.FullName,
        bs.BatchName,
        bs.TotalRequiredSessions,
        ISNULL(a.TotalAttendedSessions, 0) AS AttendedSessions,
        ISNULL(a.VerifiedGeoSessions, 0) AS GeotagVerifiedSessions,
        CAST((ISNULL(a.TotalAttendedSessions, 0) * 100.0 / NULLIF(bs.TotalRequiredSessions, 0)) AS DECIMAL(5,2)) AS AttendancePercentage,
        CASE 
            WHEN (ISNULL(a.TotalAttendedSessions, 0) * 100.0 / NULLIF(bs.TotalRequiredSessions, 0)) >= @MinAttendanceThreshold THEN 'ELIGIBLE'
            ELSE 'DEFICIENT'
        END AS CertificateEligibility
    FROM BatchStudents bs
    LEFT JOIN AttendanceSummary a ON bs.StudentId = a.StudentId
    ORDER BY bs.FullName ASC;
END;`,
    },
    {
      title: 'Reactive Angular State & HTTP Interceptor',
      lang: 'TypeScript',
      fileName: 'auth-jwt.interceptor.ts',
      description: 'Centralized JWT attachment, automatic refresh token rotation, and global error handling with RxJS.',
      code: `@Injectable()
export class AuthJwtInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getAccessToken();

    if (token && !this.isAuthEndpoint(request.url)) {
      request = this.addTokenHeader(request, token);
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !request.url.includes('/auth/refresh')) {
          return this.handle401Error(request, next);
        }
        return throwError(() => error);
      })
    );
  }

  private handle401Error(request: HttpRequest<unknown>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshJwtToken().pipe(
        switchMap((tokenResponse) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(tokenResponse.accessToken);
          return next.handle(this.addTokenHeader(request, tokenResponse.accessToken));
        }),
        catchError((err) => {
          this.isRefreshing = false;
          this.authService.logout();
          this.router.navigate(['/login']);
          return throwError(() => err);
        })
      );
    }

    return this.refreshTokenSubject.pipe(
      filter((token) => token !== null),
      take(1),
      switchMap((jwt) => next.handle(this.addTokenHeader(request, jwt!)))
    );
  }
}`,
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-showcase-wrapper">
      <div className="code-showcase-header">
        <div className="code-tab-buttons">
          {snippets.map((item, idx) => (
            <button
              key={idx}
              className={`code-tab-btn ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <span className="code-tab-badge">{item.lang}</span>
              <span className="code-tab-title">{item.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="code-editor-box">
        <div className="code-top-bar">
          <div className="window-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <span className="code-file-name">{snippets[activeTab].fileName}</span>
          <button className="copy-code-btn" onClick={handleCopy} title="Copy code">
            {copied ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        <div className="code-snippet-meta">
          <p>{snippets[activeTab].description}</p>
        </div>

        <pre className="code-pre">
          <code>{snippets[activeTab].code}</code>
        </pre>
      </div>
    </div>
  );
}
