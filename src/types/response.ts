export type EmailRes = {
  status: number;
  body: string;
};
export type PlaylistRes = {
  kind: string;
  etag: string;
  nextPageToken: string;
  items: {
    kind: string;
    etag: string;
    id: string;
    snippet: {
      publishedAt: Date;
      channelId: string;
      title: string;
      description: string;
      resourceId: {
        videoId: string;
        kind: string;
      };
      thumbnails: {
        default: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
  }[];
};
