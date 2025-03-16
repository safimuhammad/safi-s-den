export const isExternalImage = (url: string | undefined | null): boolean => {
  if (!url) return false;
  return url.includes('githubassets.com') || 
         url.includes('microlink.io') ||
         url.includes('github.com') ||
         url.includes('drive.google.com');
};

export const getProxiedImageUrl = (url: string | undefined | null): string => {
  if (!url) return '/placeholder.svg';
  if (!isExternalImage(url)) return url;
  return `/api/proxy-image?url=${encodeURIComponent(url)}`;
}; 