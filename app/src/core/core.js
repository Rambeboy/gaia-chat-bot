const _0x1285ca=_0x29df;function _0x29df(_0x3c875f,_0x22cf47){const _0x190963=_0x1909();return _0x29df=function(_0x29df61,_0x3a1b39){_0x29df61=_0x29df61-0x14c;let _0x3de8c4=_0x190963[_0x29df61];return _0x3de8c4;},_0x29df(_0x3c875f,_0x22cf47);}function _0x1909(){const _0x2e17d0=['https://api.gaianet.ai/api/v1/users/connect-wallet/','subdomain','wallet','message','api_key','user_id','2697756TTpHdz','Connected\x20to\x20Gaia\x20Net\x0a\x20-\x20User\x20ID\x20:\x20','User\x20Nodes\x20List\x20:','objects','Wallet\x20connected\x20','POST','3603444MxuDEv','connectGaia','1DYYlWx','getNodes','JsonRpcProvider','\x0a\x20\x20ThroughPut\x20:\x20','4831512fmUNRU','You\x20are\x20a\x20tour\x20guide\x20in\x20Paris,\x20France.\x20Please\x20answer\x20the\x20question\x20from\x20a\x20Paris\x20visitor\x20accurately.','\x20to\x20response\x0a','Message\x20:\x20','user','Waiting\x20for\x20','fetch','parse','Llama-3.2-3B-Instruct','assistant','PRIVATEKEY','Getting\x20Node\x20List\x20Of\x20Current\x20Account','8356975nKNtWE','data','messages','Sending\x20Chat\x20to\x20','trim','\x20:\x20','address','0x1f0Ea6e0B3590e1Ab6C12EA0A24d3D0D9bf7707D','332074raFpnj','Bearer\x20','startSession','push','nodes','apiKey','Connecting\x20to\x20Gaia\x20Net','token','-\x20Node\x20URL\x20:\x20','provider','225eaWxyI','7iCYbrt','map','/v1/chat/completions','choices','36QgDbXL','stringify','info','content','\x0a\x20-\x20API\x20KEY\x20:\x20','random','Starting\x20New\x20Chat\x20Session\x20for\x20Node\x20','Connecting\x20to\x20wallet\x20address\x20using\x20provided\x20Private\x20Key','\x0a\x20\x20Status\x20:\x20','currentChat','Response\x20from\x20','238780UmjFlT','85645wRrKAd','userId','signMessage','https://api.gaianet.ai/api/v1/users/nodes/','access_token'];_0x1909=function(){return _0x2e17d0;};return _0x1909();}(function(_0x37a9af,_0x3e96df){const _0x57ce67=_0x29df,_0x129428=_0x37a9af();while(!![]){try{const _0x1471c5=-parseInt(_0x57ce67(0x15d))/0x1*(-parseInt(_0x57ce67(0x175))/0x2)+parseInt(_0x57ce67(0x15b))/0x3+-parseInt(_0x57ce67(0x184))/0x4*(-parseInt(_0x57ce67(0x190))/0x5)+parseInt(_0x57ce67(0x155))/0x6*(-parseInt(_0x57ce67(0x180))/0x7)+-parseInt(_0x57ce67(0x161))/0x8+-parseInt(_0x57ce67(0x17f))/0x9*(parseInt(_0x57ce67(0x18f))/0xa)+parseInt(_0x57ce67(0x16d))/0xb;if(_0x1471c5===_0x3e96df)break;else _0x129428['push'](_0x129428['shift']());}catch(_0x42dec9){_0x129428['push'](_0x129428['shift']());}}}(_0x1909,0x99f1c));import{API}from'./api/api.js';import _0x3f7d17 from'../utils/logger.js';import{Config}from'../../../config/config.js';import{ethers}from'ethers';import{questionList}from'./question_list.js';import{Helper}from'../utils/helper.js';export default class Core extends API{constructor(_0x4a02c7){const _0xe27008=_0x29df;super(_0x4a02c7),this['provider']=new ethers[(_0xe27008(0x15f))]('https://base.llamarpc.com',0x2105);}async['connectWallet'](){const _0x387918=_0x29df;try{_0x3f7d17['info'](_0x387918(0x18b)),this[_0x387918(0x151)]=new ethers['Wallet'](Config[_0x387918(0x16b)][_0x387918(0x171)](),this[_0x387918(0x17e)]);if(!this['wallet'])throw Error('Invalid\x20Private\x20Key,\x20Check\x20your\x20config.js,\x20make\x20sure\x20you\x20use\x20EVM\x20Private\x20Key');this[_0x387918(0x173)]=this[_0x387918(0x151)][_0x387918(0x173)],_0x3f7d17[_0x387918(0x186)](_0x387918(0x159)+JSON['stringify'](this[_0x387918(0x173)])+'\x0a');}catch(_0x1d9c6d){throw _0x1d9c6d;}}async[_0x1285ca(0x15c)](){const _0x3fdcfb=_0x1285ca;try{_0x3f7d17[_0x3fdcfb(0x186)](_0x3fdcfb(0x17b));const _0x1cb05d=JSON[_0x3fdcfb(0x185)]({'wallet_address':_0x3fdcfb(0x174),'timestamp':Date['now']()}),_0x2f5784=await this[_0x3fdcfb(0x151)][_0x3fdcfb(0x14c)](_0x1cb05d),_0x5ad1ae=await this[_0x3fdcfb(0x167)](_0x3fdcfb(0x14f),_0x3fdcfb(0x15a),undefined,{'signature':_0x2f5784,'message':JSON[_0x3fdcfb(0x168)](_0x1cb05d)});this[_0x3fdcfb(0x191)]=_0x5ad1ae[_0x3fdcfb(0x16e)][_0x3fdcfb(0x154)],this[_0x3fdcfb(0x17c)]=_0x5ad1ae[_0x3fdcfb(0x16e)][_0x3fdcfb(0x14e)],this[_0x3fdcfb(0x17a)]=_0x5ad1ae['data'][_0x3fdcfb(0x153)],_0x3f7d17[_0x3fdcfb(0x186)](_0x3fdcfb(0x156)+this[_0x3fdcfb(0x191)]+_0x3fdcfb(0x188)+this['apiKey']+'\x0a\x20');}catch(_0x2a8f40){throw _0x2a8f40;}}async[_0x1285ca(0x15e)](){const _0x25b8cb=_0x1285ca;try{_0x3f7d17['info'](_0x25b8cb(0x16c));const _0x356a03=await this[_0x25b8cb(0x167)](_0x25b8cb(0x14d),'GET',this[_0x25b8cb(0x17c)]);this[_0x25b8cb(0x179)]=_0x356a03['data'][_0x25b8cb(0x158)],_0x3f7d17[_0x25b8cb(0x186)](_0x25b8cb(0x157)),this[_0x25b8cb(0x179)][_0x25b8cb(0x181)](_0x4b190f=>{const _0x47a3f8=_0x25b8cb;return _0x3f7d17[_0x47a3f8(0x186)](_0x47a3f8(0x17d)+_0x4b190f[_0x47a3f8(0x150)]+_0x47a3f8(0x18c)+_0x4b190f['status']+_0x47a3f8(0x160)+_0x4b190f['throughputs']+'\x0a');});}catch(_0x2115f7){throw _0x2115f7;}}async[_0x1285ca(0x177)](_0x4a115d){const _0x546abf=_0x1285ca;try{_0x3f7d17[_0x546abf(0x186)](_0x546abf(0x18a)+_0x4a115d[_0x546abf(0x150)]);const _0x550a0d=questionList[Helper[_0x546abf(0x189)](0x0,questionList['length']-0x1)];this['currentChat']={'model':_0x546abf(0x169),'messages':[{'role':'system','content':_0x546abf(0x162)},{'role':_0x546abf(0x165),'content':_0x550a0d}],'stream':![],'user':this[_0x546abf(0x191)]},_0x3f7d17[_0x546abf(0x186)](_0x546abf(0x170)+_0x4a115d[_0x546abf(0x150)]),_0x3f7d17[_0x546abf(0x186)](_0x546abf(0x164)+_0x550a0d),_0x3f7d17['info'](_0x546abf(0x166)+_0x4a115d[_0x546abf(0x150)]+_0x546abf(0x163));const _0x6f7875=await this[_0x546abf(0x167)]('https://'+_0x4a115d[_0x546abf(0x150)]+_0x546abf(0x182),_0x546abf(0x15a),_0x546abf(0x176)+this['apiKey'],this[_0x546abf(0x18d)]);_0x3f7d17[_0x546abf(0x186)](_0x546abf(0x18e)+_0x4a115d['subdomain']+'\x20:\x20'+_0x6f7875[_0x546abf(0x183)][0x0]['message'][_0x546abf(0x187)]+'\x0a'),this[_0x546abf(0x18d)][_0x546abf(0x16f)][_0x546abf(0x178)]({'content':_0x6f7875[_0x546abf(0x183)][0x0][_0x546abf(0x152)][_0x546abf(0x187)],'role':_0x546abf(0x16a)});}catch(_0x408ce7){throw _0x408ce7;}}async['continueSession'](_0x14d541,_0x1e0839){const _0x5760fb=_0x1285ca;try{_0x3f7d17[_0x5760fb(0x186)](_0x5760fb(0x170)+_0x14d541[_0x5760fb(0x150)]),_0x3f7d17['info'](_0x5760fb(0x164)+_0x1e0839),this['currentChat'][_0x5760fb(0x16f)][_0x5760fb(0x178)]({'content':_0x1e0839,'role':_0x5760fb(0x165)}),_0x3f7d17[_0x5760fb(0x186)](_0x5760fb(0x166)+_0x14d541['subdomain']+'\x20to\x20response\x0a');const _0x458fe1=await this[_0x5760fb(0x167)]('https://'+_0x14d541[_0x5760fb(0x150)]+'/v1/chat/completions',_0x5760fb(0x15a),'Bearer\x20'+this['apiKey'],this[_0x5760fb(0x18d)]);_0x3f7d17[_0x5760fb(0x186)](_0x5760fb(0x18e)+_0x14d541['subdomain']+_0x5760fb(0x172)+_0x458fe1[_0x5760fb(0x183)][0x0][_0x5760fb(0x152)][_0x5760fb(0x187)]),this[_0x5760fb(0x18d)]['messages'][_0x5760fb(0x178)]({'content':_0x458fe1['choices'][0x0]['message']['content'],'role':_0x5760fb(0x16a)});}catch(_0x2894c3){throw _0x2894c3;}}}
