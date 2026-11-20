import type { EraPalette } from '@/theme';
import type { Membership } from '@/types/domain.types';

export interface MembershipCardProps {
  membership: Membership;
  palette: EraPalette;
  onSeeMembership(): void;
  onManage(): void;
}

/** What the card says, resolved from the membership union before render. */
export interface MembershipCopy {
  status: string;
  opens: string;
  term: string | null;
  price: string | null;
}
