(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c3901ea"],{"1a15":function(t,e,a){"use strict";a("233d")},"233d":function(t,e,a){},bb51:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"topscreen"},[a("div",{staticClass:"words"},[a("div",{staticClass:"core"},[t._v("BABYBONE")]),a("div",{staticClass:"intro"},[t._v("(3 , 3)")]),a("div",{staticClass:"remark"},[t._v(' Here we go BabyBone : "J tnz dwtzsl" ')]),a("div",{staticClass:"btnbox"},[a("button",{staticClass:"btn_buy",on:{click:function(e){return t.opentWithBlank("https://pancakeswap.finance/swap?outputCurrency=0xf94A5139E8D07fAB2397735Fd21F0c004FeFCb88","_blank")}}},[t._v(t._s(t.$t("home.buybbone")))]),a("button",{staticClass:"btn_view",on:{click:function(e){return t.opentWithBlank("https://dexscreener.com/bsc/0x6a8e4ec6b0e99528c3a92b898f1952c11e4f9c22","_blank")}}},[t._v(t._s(t.$t("home.viewchart")))])]),a("div",{staticClass:"addr_text"},[t._v(" 0xf94A5139E8D07fAB2397735Fd21F0c004FeFCb88 "),a("i",{staticClass:"fa fa-copy",attrs:{id:"btn_copy_addr","data-clipboard-text":"0xf94A5139E8D07fAB2397735Fd21F0c004FeFCb88"},on:{click:function(e){return t.copyContractAddress()}}})])]),t._m(0)]),a("div",{staticClass:"about_module"},[a("div",{staticClass:"abuout_info",attrs:{"data-aos":"fade-up"}},[a("div",{staticClass:"tit"},[t._v(t._s(t.$t("home.aboutus")))]),t._m(1)])]),a("div",{staticClass:"token_stats"},[a("div",{staticClass:"tit"},[t._v(" "+t._s(t.$t("home.tokenstats"))+" ")]),a("div",{staticClass:"content"},[a("div",{staticClass:"data_block"},[a("div",{staticClass:"tit"},[t._v("Total TVL")]),a("div",{staticClass:"data"},[t._v("$"+t._s(t._f("numFilter")(t.totalTVL)))])]),a("div",{staticClass:"data_block"},[a("div",{staticClass:"tit"},[t._v("Marketcap(Fully Diluted)")]),a("div",{staticClass:"data"},[t._v("$"+t._s(t._f("numFilter")(t.marketcap)))])]),a("div",{staticClass:"data_block"},[a("div",{staticClass:"tit"},[t._v("Total Liquidity")]),a("div",{staticClass:"data"},[t._v("$"+t._s(t._f("numFilter")(t.totalLPVal)))])]),a("div",{staticClass:"data_block"},[a("div",{staticClass:"tit"},[t._v("Total Supply")]),a("div",{staticClass:"data"},[t._v(t._s(t._f("numFilter")(t.tokenTotalSupply)))])]),a("div",{staticClass:"data_block"},[a("div",{staticClass:"tit"},[t._v("Supply in Vaults")]),a("div",{staticClass:"data"},[t._v(t._s(t._f("numFilter")(t.supplyInVaults)))])]),a("div",{staticClass:"data_block"},[a("div",{staticClass:"tit"},[t._v("Circulating supply")]),a("div",{staticClass:"data"},[t._v(t._s(t._f("numFilter")(t.circulatingSupply)))])])])]),a("div",{staticClass:"small_protec"},[a("div",{staticClass:"tit"},[t._v(" 1."+t._s(t.$t("home.smolprotec"))+" "),a("span",{staticStyle:{color:"#3399ff"}},[t._v("V1.0")]),a("br"),a("span",{staticClass:"linklabel"},[a("a",{attrs:{href:"/#/Home_V2"}},[t._v(t._s(t.$t("home.click2v2")))])])]),a("div",{staticClass:"content"},[a("div",{staticClass:"lbox"},[a("div",{staticClass:"infobox"},[a("div",{staticClass:"info"},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("home.amount")))]),a("div",{staticClass:"text"},[t._v("$"+t._s(t._f("amountFilter")(t.smolProtecAmout)))])]),a("div",{staticClass:"info"},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("home.accumulatooor")))]),a("div",{staticClass:"text"},[t._v(t._s(t._f("numFilter")(t.lp2info.reward)))]),a("div",{staticClass:"remark"},[t._v("≈$"+t._s(t._f("numFilter")(t.accumulatooorVal2)))])]),a("div",{staticClass:"info"},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("home.apr")))]),a("div",{staticClass:"text"},[t._v(t._s(t.smolProtecApr)+"%")])]),a("div",{staticClass:"info"},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("home.tvl")))]),a("div",{staticClass:"text"},[t._v("$"+t._s(t.smolProtecTVL))])])]),a("div",{staticClass:"btn_box"},[a("button",{staticClass:"btn_claim",on:{click:t.tokenClaimReward}},[t._v(t._s(t.$t("home.claim")))])])]),a("div",{staticClass:"rbox"},[a("div",{staticClass:"boxwraper"},[a("Tabs",{attrs:{value:"name1"}},[a("TabPane",{attrs:{label:t.$t("home.deposit"),name:"name1"}},[a("div",{staticClass:"tab1"},[a("div",{staticClass:"title"},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("home.tokenbalance"))+" ")]),a("div",{staticClass:"amount"},[t._v(t._s(t.tokenBalance))])]),a("div",{staticClass:"form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.stakeTokenAmount,expression:"stakeTokenAmount"}],staticClass:"text_amount",attrs:{type:"text"},domProps:{value:t.stakeTokenAmount},on:{input:function(e){e.target.composing||(t.stakeTokenAmount=e.target.value)}}}),a("button",{staticClass:"btn_max",on:{click:t.setTokenMaxAmount}},[t._v(t._s(t.$t("home.max")))])]),a("div",{staticClass:"btnbox"},[t.isTokenApproved?a("button",{staticClass:"btn_approve",on:{click:t.tokenDeposit}},[t._v(t._s(t.$t("home.deposit")))]):a("button",{staticClass:"btn_approve",on:{click:t.approveToken}},[t._v(t._s(t.$t("home.approve")))])])])]),a("TabPane",{attrs:{label:t.$t("home.withdraw"),name:"name2"}},[a("div",{staticClass:"tab2"},[a("div",{staticClass:"btnbox"},[a("button",{class:["btn_approve",t.canWithdrawToken?"":"btn_gray"],attrs:{disabled:!t.canWithdrawToken},on:{click:t.tokenWithdraw}},[t._v(t._s(t.$t("home.withdraw")))])]),a("div",{staticClass:"countbox"},[t._v(t._s(t.counterTime2))])])])],1)],1)])])]),a("div",{staticClass:"big_protec"},[a("div",{staticClass:"tit"},[t._v(" 2."+t._s(t.$t("home.bigprotec"))+" "),a("span",{staticStyle:{color:"#3399ff"}},[t._v("V1.0")]),a("br"),a("span",{staticClass:"linklabel"},[a("a",{attrs:{href:"/#/Home_V2"}},[t._v(t._s(t.$t("home.click2v2")))])])]),a("div",{staticClass:"content"},[a("div",{staticClass:"lbox"},[a("div",{staticClass:"infobox"},[a("div",{staticClass:"info"},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("home.amount")))]),a("div",{staticClass:"text"},[t._v("$"+t._s(t.bigProtecAmout))])]),a("div",{staticClass:"info"},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("home.accumulatooor")))]),a("div",{staticClass:"text"},[t._v(t._s(t._f("numFilter")(t.lp1info.reward)))]),a("div",{staticClass:"remark"},[t._v("≈$"+t._s(t._f("numFilter")(t.accumulatooorVal1)))])]),a("div",{staticClass:"info"},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("home.apr")))]),a("div",{staticClass:"text"},[t._v(t._s(t.bigProtecApr)+"%")])]),a("div",{staticClass:"info"},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("home.tvl")))]),a("div",{staticClass:"text"},[t._v("$"+t._s(t.bigProtecTVL))])])]),a("div",{staticClass:"btn_box"},[a("button",{staticClass:"btn_claim",on:{click:t.LPClaimReward}},[t._v(t._s(t.$t("home.claim")))])])]),a("div",{staticClass:"rbox"},[a("div",{staticClass:"boxwraper"},[a("Tabs",{attrs:{value:"name1"}},[a("TabPane",{attrs:{label:t.$t("home.deposit"),name:"name1"}},[a("div",{staticClass:"tab1"},[a("div",{staticClass:"title"},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("home.lpbalance"))+" ")]),a("div",{staticClass:"amount"},[t._v(t._s(t.lpBalance))])]),a("div",{staticClass:"form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.stakeLPAmount,expression:"stakeLPAmount"}],staticClass:"text_amount",attrs:{type:"text"},domProps:{value:t.stakeLPAmount},on:{input:function(e){e.target.composing||(t.stakeLPAmount=e.target.value)}}}),a("button",{staticClass:"btn_max",on:{click:t.setLPMaxAmount}},[t._v(t._s(t.$t("home.max")))])]),a("div",{staticClass:"link_lp"},[a("a",{attrs:{href:"https://pancakeswap.finance/add/BNB/0xf94A5139E8D07fAB2397735Fd21F0c004FeFCb88",target:"_blank"}},[t._v(t._s(t.$t("home.providelphere")))])]),a("div",{staticClass:"btnbox"},[t.isLPApproved?a("button",{staticClass:"btn_approve",on:{click:t.LPDeposit}},[t._v(t._s(t.$t("home.deposit"))+" ")]):a("button",{staticClass:"btn_approve",on:{click:t.approveLP}},[t._v(t._s(t.$t("home.approve"))+" ")])])])]),a("TabPane",{attrs:{label:t.$t("home.withdraw"),name:"name2"}},[a("div",{staticClass:"tab2"},[a("div",{staticClass:"title"},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("home.protectedshares"))+" ")]),a("div",{staticClass:"amount"},[t._v(t._s(t.lp1info.amount))])]),a("div",{staticClass:"form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.unStakeLPAmount,expression:"unStakeLPAmount"}],staticClass:"text_amount",attrs:{type:"text"},domProps:{value:t.unStakeLPAmount},on:{input:function(e){e.target.composing||(t.unStakeLPAmount=e.target.value)}}}),a("button",{staticClass:"btn_max",on:{click:t.setUnstakeAmount}},[t._v(t._s(t.$t("home.max")))])]),a("div",{staticClass:"btnbox"},[a("button",{class:["btn_approve",t.canWithdrawLP?"":"btn_gray"],attrs:{disabled:!t.canWithdrawLP},on:{click:t.LPWithdraw}},[t._v(t._s(t.$t("home.withdraw")))])]),a("div",{staticClass:"countbox"},[t._v(t._s(t.counterTime1))])])])],1)],1)])])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"picbox"},[n("div",{staticClass:"pic",attrs:{"data-aos":"fade-up"}},[n("img",{staticStyle:{filter:"opacity(70%)"},attrs:{src:a("d843")}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("p",[t._v(" 'Rebasing' led by AMPL was known as magically increase and decease the amount of coins in ya wallet with the hope of '$1'. $BabyBone is such a coin which inherits the great experiment and the combination of meme coin. a baby bone is nothing and it could be something, and all of these depends on everyone. $BabyBone is a very powerful concept designed to 'force' us to work together and save our beloved doges. It could be baby floki, could be baby doge, could be baby milo, could be any our beloved puppies. ")])])}],s=a("99e5"),i=a.n(s),c=a("2f62"),r=a("d693"),l=a("e015"),d=a("901e"),u=a.n(d);function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var v={name:"Home",data:function(){return{web3:{},tokenContractInstant:{},poolChefContractInstant:{},lpContractInstant:{},usdtContractInstant:{},wbnbContractInstant:{},pancakeLPContractInstant:{},tokenTotalSupply:0,bigAccumulatooor:0,bnbPrice:0,tokenPrice:0,lpPrice:0,isLPApproved:!1,isTokenApproved:!1,lpBalance:0,stakeLPAmount:0,unStakeLPAmount:0,tokenBalance:0,stakeTokenAmount:0,unStakeTokenAmount:0,lp1info:{amount:0,reward:0,lockedEndTime:0},lp2info:{amount:0,reward:0,lockedEndTime:0},refreshTimer:null,bigProtecAmout:0,smolProtecAmout:0,bigProtecApr:0,smolProtecApr:0,bigProtecTVL:0,smolProtecTVL:0,totalTVL:0,marketcap:0,totalLPVal:0,supplyInVaults:0,circulatingSupply:0,canWithdrawLP:!1,canWithdrawToken:!1,counterTime1:"",counterTime2:"",timer2:null,accumulatooorVal1:0,accumulatooorVal2:0}},computed:f({},Object(c["b"])(["walletAddr"])),filters:{numFilter:function(t){return(t+"").replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,"$1,")},amountFilter:function(t){return(t/Math.pow(10,6)).toFixed(2)}},mounted:function(){var t=this;l["a"].$on("message",(function(e){t.initWeb3Instant((function(){t.initALL()}))})),t.initALL()},methods:{initALL:function(){var t=this;t.pageInit(),t.refreshWithdrawTime()},pageInit:function(){var t=this;t.getTotalSupply().then((function(e){t.getDecimals().then((function(a){t.tokenTotalSupply=(e/Math.pow(10,a)).toFixed(0)})),t.getTokenPrice((function(a){t.totalTVL=(a*(e/Math.pow(10,18))).toFixed(2)}))})),t.getUserStakeInfo(1).then((function(e){t.lp1info.amount=t.fixNum2(e.amount/Math.pow(10,18)),t.lp1info.lockedEndTime=e.lockEndedTimestamp,t.getLPPrice((function(e){var a=(e*t.lp1info.amount).toFixed(2);t.bigProtecAmout=a.toString()}))})),t.getUserStakeInfo(0).then((function(e){t.lp2info.amount=t.fixNum2(e.amount/Math.pow(10,18)),t.lp2info.lockedEndTime=e.lockEndedTimestamp,t.getTokenPrice((function(e){var a=(e*t.lp2info.amount).toFixed(2);t.smolProtecAmout=a.toString(),t.accumulatooorVal1=(t.lp1info.reward*e).toFixed(2),t.accumulatooorVal2=(t.lp2info.reward*e).toFixed(2)}))})),t.getTokenAmountOfLPReward(1).then((function(e){t.lp1info.reward=t.fixNum2(e/Math.pow(10,18))})),t.getTokenAmountOfLPReward(0).then((function(e){t.lp2info.reward=t.fixNum2(e/Math.pow(10,18))})),t.checkLPAllowance().then((function(e){var a=e/Math.pow(10,18);t.isLPApproved=a>1e10})),t.checkTokenAllowance().then((function(e){var a=e/Math.pow(10,18);t.isTokenApproved=a>0})),t.getUserMaxLPBalance().then((function(e){t.lpBalance=t.fixNum2(e/Math.pow(10,18))})),t.getTokenAmountOfAddr(t.getCurrentWalletAddr()).then((function(e){t.tokenBalance=t.fixNum2(e/Math.pow(10,18))})),t.getAprInfo(),t.refreshTimer=window.setTimeout(t.pageInit,1e4)},copyContractAddress:function(){var t=this,e=this,a=new e.$Clipboard("#btn_copy_addr");a.on("success",(function(e){t.$Message.success({content:"copy success"}),a.destroy()})),a.on("error",(function(e){t.$Message.error({content:"copy fail"}),a.destroy()}))},opentWithBlank:function(t,e){var a=document.createElement("a");a.setAttribute("href",t),e=e||"_blank",a.setAttribute("target",e),document.body.append(a),a.click(),document.body.removeChild(a)},getCurrentWalletAddr:function(){var t=this.$store.getters.walletAddr;return""==t?this.$Message.info({content:"请先连接钱包！"}):t},initWeb3Instant:function(t){this.web3=new i.a(window.web3.currentProvider),this.tokenContractInstant=new this.web3.eth.Contract(r["a"].TOKEN_CONTRACT.ABI,r["a"].TOKEN_CONTRACT.ADDRESS),this.poolChefContractInstant=new this.web3.eth.Contract(r["a"].ChefPOOL_CONTRACT.ABI,r["a"].ChefPOOL_CONTRACT.ADDRESS),this.lpContractInstant=new this.web3.eth.Contract(r["a"].LP_CONTRACT.ABI,r["a"].LP_CONTRACT.ADDRESS),this.usdtContractInstant=new this.web3.eth.Contract(r["a"].USDT_CONTRACT.ABI,r["a"].USDT_CONTRACT.ADDRESS),this.wbnbContractInstant=new this.web3.eth.Contract(r["a"].WBNB_CONTRACT.ABI,r["a"].WBNB_CONTRACT.ADDRESS),this.pancakeLPContractInstant=new this.web3.eth.Contract(r["a"].PANCAKE_WBNBLP_CONTRACT.ABI,r["a"].PANCAKE_WBNBLP_CONTRACT.ADDRESS),t&&t()},getDecimals:function(t){return this.tokenContractInstant.methods.decimals().call()},fixNum2:function(t){return(Math.floor(100*t)/100).toFixed(2)},numFormat:function(t){return(t+"").replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,"$1,")},refreshWithdrawTime:function(){var t=this,e=(new Date).getTime()/1e3;if(e>t.lp1info.lockedEndTime&&0!=t.lp1info.lockedEndTime)t.canWithdrawLP=!0,t.counterTime1="";else{var a=1e3*(t.lp1info.lockedEndTime-e);if(a>=0){var n=parseInt(a/36e5)+"",o=parseInt(a%36e5/6e4)+"",s=parseInt(a%36e5%6e4/1e3)+"",i=n.padStart(2,"0")+":"+o.padStart(2,"0")+":"+s.padStart(2,"0");t.counterTime1=i}}if(e>t.lp2info.lockedEndTime&&0!=t.lp2info.lockedEndTime)t.canWithdrawToken=!0,t.counterTime2="";else{var c=1e3*(t.lp2info.lockedEndTime-e);if(c>=0){var r=parseInt(c/36e5)+"",l=parseInt(c%36e5/6e4)+"",d=parseInt(c%36e5%6e4/1e3)+"",u=r.padStart(2,"0")+":"+l.padStart(2,"0")+":"+d.padStart(2,"0");t.counterTime2=u}}t.timer2=window.setTimeout(t.refreshWithdrawTime,6e3)},getTotalSupply:function(){return this.tokenContractInstant.methods.totalSupply().call()},getTokenAmountOfAddr:function(t){return this.tokenContractInstant.methods.balanceOf(t).call()},getWBNBAmountOfAddr:function(){return this.wbnbContractInstant.methods.balanceOf(addr).call()},getAprInfo:function(){var t=this;t.getRewardPerBlock().then((function(e){var a=e/Math.pow(10,18)*25920,n=e/Math.pow(10,18)*2880;t.getTokenPrice((function(e){var o=n*e;t.getTokenAmountOfChefPool().then((function(a){var n=(a/Math.pow(10,18)*e).toFixed(2);t.smolProtecTVL=n,t.smolProtecApr=(365*o*100/n).toFixed(2)})),t.getLPAmountOfChefPool().then((function(n){var o=n/Math.pow(10,18);t.getLPPrice((function(n){var s=a*e,i=o*n;t.bigProtecApr=(365*s*100/i).toFixed(2),t.bigProtecTVL=i.toFixed(2)}))}))}))}))},getRewardPerBlock:function(){return this.poolChefContractInstant.methods.rewardPerBlock().call()},getWBNBPriceOfBUSD:function(t){var e=this,a=r["a"].PANCAKE_WBNBLP_CONTRACT.ADDRESS;e.wbnbContractInstant.methods.balanceOf(a).call().then((function(n){var o=n/Math.pow(10,18);e.usdtContractInstant.methods.balanceOf(a).call().then((function(a){var n=a/Math.pow(10,18),s=(n/o).toFixed(2);e.bnbPrice=s,"undefined"!=typeof t&&t(s)}))}))},getTokenPrice:function(t){var e=this,a=r["a"].LP_CONTRACT.ADDRESS;e.tokenContractInstant.methods.balanceOf(a).call().then((function(n){e.wbnbContractInstant.methods.balanceOf(a).call().then((function(a){var o=a/Math.pow(10,18),s=n/Math.pow(10,18);e.getWBNBPriceOfBUSD((function(a){e.tokenPrice=o/s*a,"undefined"!=typeof t&&t(e.tokenPrice)}))}))}))},getLPPrice:function(t){var e=this,a=r["a"].LP_CONTRACT.ADDRESS;e.lpContractInstant.methods.totalSupply().call().then((function(n){e.wbnbContractInstant.methods.balanceOf(a).call().then((function(a){var o=a/Math.pow(10,18),s=n/Math.pow(10,18);e.getWBNBPriceOfBUSD((function(a){e.lpPrice=2*o*a/s,"undefined"!=typeof t&&t(e.lpPrice)}))}))}))},getUserStakeInfo:function(t){var e=this,a=e.getCurrentWalletAddr();return e.poolChefContractInstant.methods.userInfo(t,a).call()},getUserMaxLPBalance:function(){var t=this,e=t.getCurrentWalletAddr();return this.lpContractInstant.methods.balanceOf(e).call()},setLPMaxAmount:function(){var t=this;t.stakeLPAmount=t.lpBalance},setTokenMaxAmount:function(){var t=this;t.stakeTokenAmount=t.tokenBalance},setUnstakeAmount:function(){var t=this;t.unStakeLPAmount=t.lp1info.amount},setUnstakeTokenAmount:function(){var t=this;t.unStakeTokenAmount=t.lp2info.amount},getTokenAmountOfLPReward:function(t){return this.poolChefContractInstant.methods.pendingReward(t,this.getCurrentWalletAddr()).call()},getTokenAmountOfLP:function(){return this.tokenContractInstant.methods.balanceOf(r["a"].LP_CONTRACT.ADDRESS).call()},getLPAmountOfChefPool:function(){return this.lpContractInstant.methods.balanceOf(r["a"].ChefPOOL_CONTRACT.ADDRESS).call()},getTokenAmountOfChefPool:function(){return this.tokenContractInstant.methods.balanceOf(r["a"].ChefPOOL_CONTRACT.ADDRESS).call()},checkLPAllowance:function(){var t=this;return t.lpContractInstant.methods.allowance(t.getCurrentWalletAddr(),r["a"].ChefPOOL_CONTRACT.ADDRESS).call()},checkTokenAllowance:function(){var t=this;return t.tokenContractInstant.methods.allowance(t.getCurrentWalletAddr(),r["a"].ChefPOOL_CONTRACT.ADDRESS).call()},approveLP:function(){var t=this,e={from:t.getCurrentWalletAddr()},a="115792089237316195423570985008687907853269984665640564039457584007913129639935";t.lpContractInstant.methods.approve(r["a"].ChefPOOL_CONTRACT.ADDRESS,a).send(e).on("transactionHash",(function(e){t.$Message.loading({content:"loading...",duration:0,background:!0})})).then((function(e){t.$Message.destroy(),t.$Message.success({content:"approve success!",onClose:function(){t.isLPApproved=!0}})})).catch((function(e){t.$Message.destroy(),t.$Message.error({content:"approve fail!"})}))},approveToken:function(){var t=this,e={from:t.getCurrentWalletAddr()},a="115792089237316195423570985008687907853269984665640564039457584007913129639935";t.tokenContractInstant.methods.approve(r["a"].ChefPOOL_CONTRACT.ADDRESS,a).send(e).on("transactionHash",(function(e){t.$Message.loading({content:"loading...",duration:0,background:!0})})).then((function(e){t.$Message.destroy(),t.$Message.success({content:"approve success!",onClose:function(){t.isTokenApproved=!0}})})).catch((function(e){t.$Message.destroy(),t.$Message.error({content:"approve fail!"})}))},LPDeposit:function(){this.deposit(1,this.stakeLPAmount)},LPWithdraw:function(){this.withdraw(1,this.unStakeLPAmount)},LPClaimReward:function(){this.claim(1)},tokenDeposit:function(){this.deposit(0,this.stakeTokenAmount)},tokenWithdraw:function(){var t=.9*this.lp2info.amount;this.withdraw(0,t)},tokenClaimReward:function(){this.claim(0)},deposit:function(t,e){var a=this,n=a.getCurrentWalletAddr(),o=e*Math.pow(10,18),s=new u.a(o).toFixed();console.log(s);var i={from:n};a.poolChefContractInstant.methods.deposit(t,s).send(i).on("transactionHash",(function(t){a.$Message.loading({content:"loading...",duration:0,background:!0})})).then((function(t){a.$Message.destroy(),a.$Message.success({content:"success!",onClose:function(){a.$router.go(0)}})})).catch((function(t){a.$Message.destroy(),a.$Message.error({content:"fail!"})}))},withdraw:function(t,e){var a=this,n=a.getCurrentWalletAddr(),o=e*Math.pow(10,18),s=new u.a(o).toFixed();console.log(s);var i={from:n};a.poolChefContractInstant.methods.withdraw(t,s).send(i).on("transactionHash",(function(t){a.$Message.loading({content:"loading...",duration:0,background:!0})})).then((function(t){a.$Message.destroy(),a.$Message.success({content:"success!",onClose:function(){a.$router.go(0)}})})).catch((function(t){a.$Message.destroy(),a.$Message.error({content:"fail!"})}))},claim:function(t){var e=this,a=e.getCurrentWalletAddr(),n={from:a};e.poolChefContractInstant.methods.claim(t,a).send(n).on("transactionHash",(function(t){e.$Message.loading({content:"loading...",duration:0,background:!0})})).then((function(t){e.$Message.destroy(),e.$Message.success({content:"success!",onClose:function(){e.$router.go(0)}})})).catch((function(t){e.$Message.destroy(),e.$Message.error({content:"fail!"})}))}},beforeDestroy:function(){clearTimeout(this.refreshTimer),clearTimeout(this.timer2)}},h=v,C=(a("1a15"),a("2877")),b=Object(C["a"])(h,n,o,!1,null,"2bab8400",null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-1c3901ea.1677600722948.js.map