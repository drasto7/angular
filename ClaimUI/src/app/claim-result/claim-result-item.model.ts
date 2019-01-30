export class ClaimResultItem {

    public claimNumber: string;
    public claimStatus: string;
    public claimAmount: string;
    public authNumber: string;
    public claimEndDate: string;
    public claimStartDate: string;
    public subjectId: string;

    constructor(claimNum: string, status: string, claimAmt: string,
        authNo: string, claimEndDate: string, claimStartDate: string, subjectId: string) {
        this.claimNumber = claimNum;
        this.claimStatus = status;
        this.claimAmount = claimAmt;
        this.authNumber = authNo;
        this.claimStartDate = claimStartDate;
        this.claimEndDate =  claimEndDate;
        this.subjectId = subjectId;
    }

}
