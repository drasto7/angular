import { ClaimResultItem } from '../claim-result/claim-result-item.model';
import { Subject } from 'rxjs';

export class ClaimService {
   claimResultSet = new Subject<ClaimResultItem[]>();
   claimDetailSet = new Subject<ClaimResultItem>();
   claimResultItems: ClaimResultItem[];
   claimItem: ClaimResultItem;

    setClaimList(claimList: ClaimResultItem[] ) {
        this.claimResultItems = claimList;
        this.claimResultSet.next(this.claimResultItems);
        this.setClaimDetail(new ClaimResultItem('', '', '', '', '', '', ''));
    }

    getClaimList() {
        return this.claimResultItems;
    }

    setClaimDetail(claim: ClaimResultItem) {
        this.claimItem = claim;
        this.claimDetailSet.next(this.claimItem);
    }
}

