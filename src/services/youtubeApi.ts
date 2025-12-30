const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';

export function extractVideoId(url: string): string | null {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  return match ? match[1] : null;
}

export async function getLiveChatId(videoId: string, apiKey: string): Promise<string | null> {
  const url = `${YOUTUBE_API_BASE}/videos?part=liveStreamingDetails&id=${videoId}&key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.items && data.items[0] && data.items[0].liveStreamingDetails) {
    return data.items[0].liveStreamingDetails.activeLiveChatId;
  }
  return null;
}

export async function getLiveChatMessages(liveChatId: string, apiKey: string, pageToken?: string): Promise<any> {
  let url = `${YOUTUBE_API_BASE}/liveChat/messages?part=snippet&liveChatId=${liveChatId}&key=${apiKey}`;
  if (pageToken) {
    url += `&pageToken=${pageToken}`;
  }
  const response = await fetch(url);
  return await response.json();
}

export function startPollingComments(liveChatId: string, apiKey: string, onNewComments: (comments: any[]) => void): () => void {
  let pageToken: string | undefined;
  const interval = setInterval(async () => {
    try {
      const data = await getLiveChatMessages(liveChatId, apiKey, pageToken);
      if (data.items) {
        onNewComments(data.items);
      }
      pageToken = data.nextPageToken;
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  }, 5000); // Poll every 5 seconds

  return () => clearInterval(interval);
}