interface BricksetRequest {
  apiKey: string;
}

interface LoginRequest extends BricksetRequest {
  username: string;
  password: string;
}

interface GetSetsRequest extends BricksetRequest {
  userHash: string;
  params: string;
}

type OrderByOptions =
  | 'Number'
  | 'YearFrom'
  | 'Pieces'
  | 'Minifigs'
  | 'Rating'
  | 'UKRetailPrice'
  | 'USRetailPrice'
  | 'CARetailPrice'
  | 'DERetailPrice'
  | 'UKPricePerPiece'
  | 'USPricePerPiece'
  | 'CAPricePerPiece'
  | 'DEPricePerPiece'
  | 'Theme'
  | 'Subtheme'
  | 'Name'
  | 'Random'
  | 'QtyOwned'
  | 'OwnCount'
  | 'WantCount'
  | 'UserRating'
  | 'CollectionID'
  | 'Rank';

interface GetSetsParams {
  setID?: string; // internal setID
  query?: string; // Search term: searches set number, name, theme and subtheme
  theme?: string;
  subtheme?: string;
  setNumber?: string; //  Full set number, in the format {number}-{variant}, e.g. 6876-1
  year?: string;
  tag?: string;
  owned?: number; // 1 or 0
  wanted?: number; // 1 or 0
  updatedSince?: string; // yyyy-mm-dd format
  orderBy?: OrderByOptions | `${OrderByOptions}DESC`;
  pageSize?: number;
  pageNumber?: number;
  extendedData?: number; // 1 or 0
}
