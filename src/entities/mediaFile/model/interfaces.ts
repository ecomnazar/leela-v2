export interface IUploadedStory {
  contentType: string;
  fileName: string;
  fileUrl: string;
  id: number;
}

export type TUploadStoryImageApiResponse = IUploadedStory[];
