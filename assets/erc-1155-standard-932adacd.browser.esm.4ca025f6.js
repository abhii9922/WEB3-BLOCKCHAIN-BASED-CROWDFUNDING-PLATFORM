var u=Object.defineProperty;var o=(a,r,t)=>r in a?u(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t;var c=(a,r,t)=>(o(a,typeof r!="symbol"?r+"":r,t),t);import{a4 as i}from"./index.28a4df2f.js";import{E as h}from"./erc-1155-8a98f5bd.browser.esm.da86e8cd.js";class f{constructor(r,t,e){c(this,"transfer",i((()=>{var r=this;return async function(t,e,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:[0];return r.erc1155.transfer.prepare(t,e,n,s)}})()));c(this,"transferBatch",i((()=>{var r=this;return async function(t,e,n,s){let p=arguments.length>4&&arguments[4]!==void 0?arguments[4]:[0];return r.erc1155.transferBatch.prepare(t,e,n,s,p)}})()));c(this,"setApprovalForAll",i(async(r,t)=>this.erc1155.setApprovalForAll.prepare(r,t)));c(this,"airdrop",i((()=>{var r=this;return async function(t,e,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:[0];return r.erc1155.airdrop.prepare(t,e,n,s)}})()));this.contractWrapper=r,this.storage=t,this.erc1155=new h(this.contractWrapper,this.storage,e),this._chainId=e}get chainId(){return this._chainId}onNetworkUpdated(r){this.contractWrapper.updateSignerOrProvider(r)}getAddress(){return this.contractWrapper.address}async get(r){return this.erc1155.get(r)}async totalSupply(r){return this.erc1155.totalSupply(r)}async balanceOf(r,t){return this.erc1155.balanceOf(r,t)}async balance(r){return this.erc1155.balance(r)}async isApproved(r,t){return this.erc1155.isApproved(r,t)}}export{f as S};
