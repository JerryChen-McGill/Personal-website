import React from 'react';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
}

// Track external link clicks
export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  className,
  label,
}) => {
  const handleClick = () => {
    // Dynamically import to avoid circular dependency
    import('../utils/analytics').then(({ trackExternalLink }) => {
      trackExternalLink(href, label || href);
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

interface DownloadButtonProps {
  fileUrl: string;
  fileName: string;
  fileType: 'pdf' | 'doc' | 'image';
  children: React.ReactNode;
  className?: string;
}

// Track file downloads
export const DownloadButton: React.FC<DownloadButtonProps> = ({
  fileUrl,
  fileName,
  fileType,
  children,
  className,
}) => {
  const handleDownload = async () => {
    try {
      // Track download
      const { trackDownload } = await import('../utils/analytics');
      trackDownload(fileType, fileName);

      // Trigger download
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open(fileUrl, '_blank');
    }
  };

  return (
    <button onClick={handleDownload} className={className}>
      {children}
    </button>
  );
};

export default ExternalLink;
