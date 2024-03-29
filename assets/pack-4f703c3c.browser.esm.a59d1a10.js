var U=Object.defineProperty;var F=(w,s,t)=>s in w?U(w,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):w[s]=t;var g=(w,s,t)=>(F(w,typeof s!="symbol"?s+"":s,t),t);import{aF as R,aZ as l,aP as O,aO as N,bJ as $,bK as T,$ as W,a0 as x,bL as D,a2 as M,a3 as V,A as z,B as m,b3 as y,ab as A,a4 as f,a5 as k,ah as _,ak as K,bM as B,_ as E,bN as Q}from"./index.28a4df2f.js";import{h as Y}from"./hasERC20Allowance-4fc8d663.browser.esm.e0a63adf.js";import{R as j,a as G}from"./assertEnabled-85fb33fa.browser.esm.2d024846.js";import{C as Z,a as H,G as J,b as L,d as X}from"./contract-appuri-af8e0684.browser.esm.1a1c097b.js";import{a as b}from"./marketplace-0cfb001a.browser.esm.d99be5e4.js";import{b as tt}from"./QueryParams-60251125.browser.esm.79e40a44.js";import{C as rt}from"./contract-interceptor-d7b164a7.browser.esm.b65ebba9.js";import{C as at,a as et}from"./contract-owner-a2cea91c.browser.esm.e9412587.js";import{C as nt}from"./contract-roles-774d44d3.browser.esm.be1e11a8.js";import{S as st}from"./erc-1155-standard-932adacd.browser.esm.4ca025f6.js";import{E as ot}from"./erc-20-1a621900.browser.esm.f77cf8ee.js";import{N as ct}from"./setErc20Allowance-5cfdd359.browser.esm.d7686afa.js";import"./index.8bd19c85.js";import"./erc-1155-8a98f5bd.browser.esm.da86e8cd.js";import"./drop-claim-conditions-02e48b99.browser.esm.74787e13.js";const v=(()=>R.object({contractAddress:N}))(),dt=(()=>v.extend({quantity:O}))(),it=(()=>v.extend({tokenId:l}))(),pt=(()=>v.extend({tokenId:l,quantity:l}))(),ht=(()=>dt.omit({quantity:!0}).extend({quantityPerReward:O}))(),ut=it,gt=(()=>pt.omit({quantity:!0}).extend({quantityPerReward:l}))(),mt=(()=>ht.extend({totalRewards:l.default("1")}))(),lt=ut,wt=(()=>gt.extend({totalRewards:l.default("1")}))(),q=(()=>R.object({erc20Rewards:R.array(mt).default([]),erc721Rewards:R.array(lt).default([]),erc1155Rewards:R.array(wt).default([])}))(),ft=(()=>q.extend({packMetadata:ct,rewardsPerPack:l.default("1"),openStartTime:j.default(new Date)}))();class kt{constructor(s,t,r,n,a){g(this,"featureName",T.name);g(this,"open",f((()=>{var s=this;return async function(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5e5;return k.fromContractWrapper({contractWrapper:s.contractWrapper,method:"openPack",args:[t,r],overrides:{gasLimit:n},parse:a=>{let o=m.from(0);try{o=s.contractWrapper.parseLogs("PackOpenRequested",a==null?void 0:a.logs)[0].args.requestId}catch{}return{receipt:a,id:o}}})}})()));g(this,"claimRewards",f((()=>{var s=this;return async function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:5e5;return k.fromContractWrapper({contractWrapper:s.contractWrapper,method:"claimRewards",args:[],overrides:{gasLimit:t},parse:async r=>{const n=s.contractWrapper.parseLogs("PackOpened",r==null?void 0:r.logs);if(n.length===0)throw new Error("PackOpened event not found");const a=n[0].args.rewardUnitsDistributed;return await s.parseRewards(a)}})}})()));let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:new W(s,t,B,n,r);this.contractWrapper=o,this.storage=r,this.chainId=a,this.events=new L(this.contractWrapper)}onNetworkUpdated(s){this.contractWrapper.updateSignerOrProvider(s)}getAddress(){return this.contractWrapper.address}async parseRewards(s){const t=[],r=[],n=[];for(const a of s)switch(a.tokenType){case 0:{const o=await y(this.contractWrapper.getProvider(),a.assetContract);t.push({contractAddress:a.assetContract,quantityPerReward:A(a.totalAmount,o.decimals).toString()});break}case 1:{r.push({contractAddress:a.assetContract,tokenId:a.tokenId.toString()});break}case 2:{n.push({contractAddress:a.assetContract,tokenId:a.tokenId.toString(),quantityPerReward:a.totalAmount.toString()});break}}return{erc20Rewards:t,erc721Rewards:r,erc1155Rewards:n}}async addPackOpenEventListener(s){return this.events.addEventListener("PackOpened",async t=>{s(t.data.packId.toString(),t.data.opener,await this.parseRewards(t.data.rewardUnitsDistributed))})}async canClaimRewards(s){const t=await _(s||await this.contractWrapper.getSignerAddress());return await this.contractWrapper.read("canClaimRewards",[t])}async openAndClaim(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5e5;const n=await this.contractWrapper.sendTransaction("openPackAndClaimRewards",[s,t,r],{gasLimit:m.from(5e5)});let a=m.from(0);try{a=this.contractWrapper.parseLogs("PackOpenRequested",n==null?void 0:n.logs)[0].args.requestId}catch{}return{receipt:n,id:a}}async getLinkBalance(){const s=(await E(()=>import("./index.28a4df2f.js").then(t=>t.dA),["assets/index.28a4df2f.js","assets/index.5a70ddf1.css"])).default;return this.getLinkContract(s).balanceOf(this.contractWrapper.address)}async transferLink(s){const t=(await E(()=>import("./index.28a4df2f.js").then(r=>r.dA),["assets/index.28a4df2f.js","assets/index.5a70ddf1.css"])).default;await this.getLinkContract(t).transfer(this.contractWrapper.address,s)}getLinkContract(s){const t=Q[this.chainId];if(!t)throw new Error(`No LINK token address found for chainId ${this.chainId}`);const r=new W(this.contractWrapper.getSignerOrProvider(),t,s,this.contractWrapper.options,this.storage);return new ot(r,this.storage,this.chainId)}}const P=class extends st{constructor(t,r,n){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(t,r,o,a.gasless&&"openzeppelin"in a.gasless?{...a,gasless:{...a.gasless,openzeppelin:{...a.gasless.openzeppelin,useEOAForwarder:!0}}}:a,n);super(d,n,p);g(this,"create",f(async t=>{const r=await this.contractWrapper.getSignerAddress();return this.createTo.prepare(r,t)}));g(this,"addPackContents",f(async(t,r)=>{const[n,a]=await Promise.all([this.contractWrapper.getSignerAddress(),q.parseAsync(r)]),{contents:o,numOfRewardUnits:p}=await this.toPackContentArgs(a);return k.fromContractWrapper({contractWrapper:this.contractWrapper,method:"addPackContents",args:[t,o,p,n],parse:d=>{const c=this.contractWrapper.parseLogs("PackUpdated",d==null?void 0:d.logs);if(c.length===0)throw new Error("PackUpdated event not found");const e=c[0].args.packId;return{id:e,receipt:d,data:()=>this.erc1155.get(e)}}})}));g(this,"createTo",f(async(t,r)=>{const[n,a,o]=await Promise.all([tt(r.packMetadata,this.storage),ft.parseAsync(r),_(t)]),{erc20Rewards:p,erc721Rewards:d,erc1155Rewards:c}=a,e={erc20Rewards:p,erc721Rewards:d,erc1155Rewards:c},{contents:h,numOfRewardUnits:i}=await this.toPackContentArgs(e);return k.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createPack",args:[h,i,n,a.openStartTime,a.rewardsPerPack,o],parse:u=>{const I=this.contractWrapper.parseLogs("PackCreated",u==null?void 0:u.logs);if(I.length===0)throw new Error("PackCreated event not found");const S=I[0].args.packId;return{id:S,receipt:u,data:()=>this.erc1155.get(S)}}})}));g(this,"open",f((()=>{var t=this;return async function(r){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5e5;if(t._vrf)throw new Error("This contract is using Chainlink VRF, use `contract.vrf.open()` or `contract.vrf.openAndClaim()` instead");return k.fromContractWrapper({contractWrapper:t.contractWrapper,method:"openPack",args:[r,n],overrides:{gasLimit:a},parse:async o=>{const p=t.contractWrapper.parseLogs("PackOpened",o==null?void 0:o.logs);if(p.length===0)throw new Error("PackOpened event not found");const d=p[0].args.rewardUnitsDistributed,c=[],e=[],h=[];for(const i of d)switch(i.tokenType){case 0:{const u=await y(t.contractWrapper.getProvider(),i.assetContract);c.push({contractAddress:i.assetContract,quantityPerReward:A(i.totalAmount,u.decimals).toString()});break}case 1:{e.push({contractAddress:i.assetContract,tokenId:i.tokenId.toString()});break}case 2:{h.push({contractAddress:i.assetContract,tokenId:i.tokenId.toString(),quantityPerReward:i.totalAmount.toString()});break}}return{erc20Rewards:c,erc721Rewards:e,erc1155Rewards:h}}})}})()));this.abi=x.parse(o||[]),this.metadata=new Z(this.contractWrapper,D,this.storage),this.app=new H(this.contractWrapper,this.metadata,this.storage),this.roles=new nt(this.contractWrapper,P.contractRoles),this.royalties=new at(this.contractWrapper,this.metadata),this.encoder=new M(this.contractWrapper),this.estimator=new J(this.contractWrapper),this.events=new L(this.contractWrapper),this.interceptor=new rt(this.contractWrapper),this.owner=new et(this.contractWrapper),this._vrf=this.detectVrf()}get vrf(){return G(this._vrf,T)}onNetworkUpdated(t){var r;this.contractWrapper.updateSignerOrProvider(t),(r=this._vrf)==null||r.onNetworkUpdated(t)}getAddress(){return this.contractWrapper.address}async get(t){return this.erc1155.get(t)}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[V("transfer"),z])}async getPackContents(t){const{contents:r,perUnitAmounts:n}=await this.contractWrapper.read("getPackContents",[t]),a=[],o=[],p=[];for(let d=0;d<r.length;d++){const c=r[d],e=n[d];switch(c.tokenType){case 0:{const h=await y(this.contractWrapper.getProvider(),c.assetContract),i=A(e,h.decimals),u=A(m.from(c.totalAmount).div(e),h.decimals);a.push({contractAddress:c.assetContract,quantityPerReward:i,totalRewards:u});break}case 1:{o.push({contractAddress:c.assetContract,tokenId:c.tokenId.toString()});break}case 2:{p.push({contractAddress:c.assetContract,tokenId:c.tokenId.toString(),quantityPerReward:e.toString(),totalRewards:m.from(c.totalAmount).div(e).toString()});break}}}return{erc20Rewards:a,erc721Rewards:o,erc1155Rewards:p}}async toPackContentArgs(t){const r=[],n=[],{erc20Rewards:a,erc721Rewards:o,erc1155Rewards:p}=t,d=this.contractWrapper.getProvider(),c=await this.contractWrapper.getSignerAddress();for(const e of a){const i=(await K(d,e.quantityPerReward,e.contractAddress)).mul(e.totalRewards);if(!await Y(this.contractWrapper,e.contractAddress,i))throw new Error(`ERC20 token with contract address "${e.contractAddress}" does not have enough allowance to transfer.

You can set allowance to the multiwrap contract to transfer these tokens by running:

await sdk.getToken("${e.contractAddress}").setAllowance("${this.getAddress()}", ${i});

`);n.push(e.totalRewards),r.push({assetContract:e.contractAddress,tokenType:0,totalAmount:i,tokenId:0})}for(const e of o){if(!await b(this.contractWrapper.getProvider(),this.getAddress(),e.contractAddress,e.tokenId,c))throw new Error(`ERC721 token "${e.tokenId}" with contract address "${e.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getNFTCollection("${e.contractAddress}").setApprovalForToken("${this.getAddress()}", ${e.tokenId});

`);n.push("1"),r.push({assetContract:e.contractAddress,tokenType:1,totalAmount:1,tokenId:e.tokenId})}for(const e of p){if(!await b(this.contractWrapper.getProvider(),this.getAddress(),e.contractAddress,e.tokenId,c))throw new Error(`ERC1155 token "${e.tokenId}" with contract address "${e.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getEdition("${e.contractAddress}").setApprovalForAll("${this.getAddress()}", true);

`);n.push(e.totalRewards),r.push({assetContract:e.contractAddress,tokenType:2,totalAmount:m.from(e.quantityPerReward).mul(m.from(e.totalRewards)),tokenId:e.tokenId})}return{contents:r,numOfRewardUnits:n}}async prepare(t,r,n){return k.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:n})}async call(t,r,n){return this.contractWrapper.call(t,r,n)}detectVrf(){if(X(this.contractWrapper,"PackVRF"))return new kt(this.contractWrapper.getSignerOrProvider(),this.contractWrapper.address,this.storage,this.contractWrapper.options,this.chainId)}};let C=P;g(C,"contractRoles",$);export{C as Pack};
