import{e as h,v as n,I as d,f as c,G as u,cw as l,cx as w,cy as a}from"./index.28a4df2f.js";class E extends h{constructor(e){super(),n(this,"id",d.paper),n(this,"name","Embedded Wallet"),n(this,"ready",!0),n(this,"user",null),n(this,"onAccountsChanged",async t=>{t.length===0?await this.onDisconnect():this.emit("change",{account:c(t[0])})}),n(this,"onChainChanged",t=>{const i=u(t),s=this.options.chains.findIndex(r=>r.chainId===i)===-1;this.emit("change",{chain:{id:i,unsupported:s}})}),n(this,"onDisconnect",async()=>{this.emit("disconnect")}),this.options=e}getEmbeddedWalletSDK(){return this._embeddedWalletSdk||(this._embeddedWalletSdk=new l({clientId:this.options.clientId,chain:"Ethereum",onAuthSuccess:this.options.onAuthSuccess})),this._embeddedWalletSdk}async connect(e){if(e){if(!e.authResult)throw new Error("Missing authData - call authenticate() first with your authentication strategy");if(!e.authResult.user)throw new Error("Missing authData.user - call authenticate() first with your authentication strategy");this.user=e.authResult.user}else{const t=await this.authenticate({strategy:"iframe"});if(!t.user)throw new Error("Error connecting User");this.user=t.user}return e!=null&&e.chainId&&this.switchChain(e.chainId),this.getAddress()}async disconnect(){const e=this._embeddedWalletSdk;await(e==null?void 0:e.auth.logout()),this._signer=void 0,this._embeddedWalletSdk=void 0,this.user=null}async getAddress(){if(!this.user)throw new Error("Embedded Wallet is not connected");return await this.getSigner().then(e=>e.getAddress())}async isConnected(){try{return!!await this.getAddress()}catch{return!1}}async getProvider(){const e=await this.getSigner();if(!e.provider)throw new Error("Provider not found");return e.provider}async getSigner(){if(this._signer)return this._signer;const t=await(await this.getUser()).wallet.getEthersJsSigner({rpcEndpoint:this.options.chain.rpc[0]||""});if(!t)throw new Error("Signer not found");return this._signer=t,t}async isAuthorized(){return!1}async switchChain(e){var i,s;const t=this.options.chains.find(r=>r.chainId===e);if(!t)throw new Error("Chain not configured");try{await((i=this.user)==null?void 0:i.wallet.setChain({chain:"Ethereum"})),this._signer=await((s=this.user)==null?void 0:s.wallet.getEthersJsSigner({rpcEndpoint:t.rpc[0]||""})),this.emit("change",{chain:{id:e,unsupported:!1}})}catch(r){console.warn("Failed to switch chain",r)}}async setupListeners(){return Promise.resolve()}updateChains(e){this.options.chains=e}async getUser(){if(!this.user||!this.user.wallet||!this.user.wallet.getEthersJsSigner){const t=await this.getEmbeddedWalletSDK().getUser();switch(t.status){case w.LOGGED_IN_WALLET_INITIALIZED:{this.user=t;break}default:throw new Error("Embedded Wallet is not authenticated, please authenticate first")}}return this.user}async getEmail(){return(await this.getUser()).authDetails.email}async getRecoveryInformation(){return(await this.getUser()).authDetails}async sendVerificationEmail(e){let{email:t}=e;return this.getEmbeddedWalletSDK().auth.sendEmailLoginOtp({email:t})}async authenticate(e){const t=this.getEmbeddedWalletSDK(),i=e.strategy;switch(i){case"email_verification":return await t.auth.verifyEmailLoginOtp({email:e.email,otp:e.verificationCode,recoveryCode:e.recoveryCode});case"apple":case"facebook":case"google":{const s=f[i];return t.auth.loginWithOauth({oauthProvider:s,closeOpenedWindow:e.closeOpenedWindow,openedWindow:e.openedWindow})}case"jwt":return t.auth.loginWithCustomJwt({jwt:e.jwt,encryptionKey:e.encryptionKey});case"auth_endpoint":return t.auth.loginWithCustomAuthEndpoint({payload:e.payload,encryptionKey:e.encryptionKey});case"iframe_email_verification":return t.auth.loginWithEmailOtp({email:e.email});case"iframe":return t.auth.loginWithModal();default:g(i)}}}function g(o){throw new Error("Invalid param: "+o)}const f={google:a.GOOGLE,facebook:a.FACEBOOK,apple:a.APPLE};export{E as EmbeddedWalletConnector};
