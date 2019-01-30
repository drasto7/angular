import { ClaimResultItem } from '../claim-result/claim-result-item.model';

export class ClaimService {
   claimResultItems: ClaimResultItem[];

    setClaimList(claimList: ClaimResultItem[] ) {
        this.claimResultItems = claimList;
    }
}

