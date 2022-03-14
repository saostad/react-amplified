import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ReviewsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Reviews {
  readonly id: string;
  readonly rcRequestLink: string;
  readonly amzProductTitle?: string;
  readonly amzProductLink?: string;
  readonly amzOrderLink?: string;
  readonly orderDate?: string;
  readonly orderAmount?: number;
  readonly commissionAmount?: number;
  readonly productReceivedDate?: string;
  readonly amzReviewSubmitDate?: string;
  readonly amzReviewPublishDate?: string;
  readonly rcReviewSubmitDate?: string;
  readonly refundDate?: string;
  readonly refundAmount?: number;
  readonly notes?: (string | null)[];
  readonly rcSellerFeedbackSubmitDate?: string;
  readonly amzSellerFeedbackSubmitDate?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Reviews, ReviewsMetaData>);
  static copyOf(source: Reviews, mutator: (draft: MutableModel<Reviews, ReviewsMetaData>) => MutableModel<Reviews, ReviewsMetaData> | void): Reviews;
}