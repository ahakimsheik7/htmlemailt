(window.webpackJsonp=window.webpackJsonp||[]).push([["m-storage"],{1781:function(e,r,t){var o,n;o=[t(8),t(10),t(2),t(14),t(100),t(17)],void 0===(n=function(e,r,t,o,n,s){"use strict";var i=[];function a(e){for(var r=i.length-1;r>=0;r--)i[r]===e&&i.splice(r,1)}return new(r.Model.extend({_execute:function(r){i.push(r),r.promises=[],r.fnExe(r),t.allSettled(r.promises).then(function(t){var i=[];e.each(t,(function(e){"fulfilled"!==e.state&&i.push(e.reason)})),0===i.length?(marvel.logger.debug("transaction success: "+r.name),a(r),r.deferred&&r.deferred.resolve(t)):(a(r),r.deferred&&r.deferred.reject(i),o.checkIsOffline().then(function(t){t||!r.fnErr||"function"!=typeof r.fnErr?r.retry?(r.count=r.count||1,t?marvel.logger.warn("TBD: retry after coming back online"):(marvel.logger.warn("Transaction: retrying "+r.name+" ("+r.count+") after a failure."),e.delay(function(){if(r.count<r.retry)r.count++,this._execute(r);else{var e=!1;marvel.logger.warn("Transaction "+r.name+" failed after "+r.retry+" retries. Informing user",i),"Save Slate"===r.name?n.showConfirm(s.getString("save-project-error-title"),s.getString("save-project-error-text"),{okText:s.getString("save-project-error-action-refresh"),cancelText:s.getString("save-project-error-action-retry"),okHandler:function(){e=!0,window.location.reload()}.bind(this)}).then(function(){e||this._execute(r)}.bind(this)).done():n.showAlert("Oops!","Something is wrong ["+r.name+" failed].  Upon dismissing this message your browser will refresh.").then((function(){window.location.reload()}))}}.bind(this),500*Math.pow(2,r.count)))):t?marvel.logger.warn("Transaction failure not shown "+r.name):(marvel.logger.warn("Transaction "+r.name+" failed, informing user",i),n.showAlert("Oops!","Something is wrong ["+r.name+" failed].  Upon dismissing this message your browser will refresh.").then((function(){window.location.reload()}))):r.fnErr(i)}.bind(this)))}.bind(this))},inProgress:function(){return i.length>0},execute:function(e,r,o,n){marvel.logger.debug("Transaction.execute("+e+")");var s={fnExe:o,fnErr:n,name:e,retry:r,deferred:t.defer()};return this._execute(s),s.deferred.promise}}))}.apply(r,o))||(e.exports=n)},3775:function(e,r,t){var o,n;o=[t(8)],void 0===(n=function(e){"use strict";var r=!1;function t(){r||(r=!0)}return{applyPatches:t,setStorageInstance:function(e){e,t()}}}.apply(r,o))||(e.exports=n)},856:function(e,r,t){var o,n;o=[t(15),t(8),t(2),t(1781),t(14),t(1)],void 0===(n=function(e,r,t,o,n,s){"use strict";return{initializeStorage:function(){var e;return this.dcx=new this.AdobeDCX({xhrBaseBranchSupport:!0}),this.dcxService=this.dcx.createHTTPService((function(r){n.getAccessToken().then((function(t){t===e?(this.logger.error("Storage rejected our token, but IMS says it's valid, giving up!"),r.setAuthToken()):(e=t,r.setAuthToken(t))}))})),n.getAccessToken().then(function(e){this.dcxService.setAuthToken(e)}.bind(this)).catch(function(e){this.dcxService.setAuthToken()}.bind(this)).finally(function(){this.dcxService.setApiKey(s.key);var e=this.storageServer;this.dcxSession=this.dcx.createStorageSession(this.dcxService,"https://"+e),this.dcxSession.getCompositeManifestHref=function(e,r,t){t(null,"/id/"+e._assetId+"/:manifest")};var r=this.AdobeDCXUtil.endPointOf,t=this.AdobeDCXUtil.appendPathElements;this.dcxSession._resolveUrl=function(e){return r(e)?(e.indexOf("cc-api-storage")>=0&&e.indexOf("-creativesdk")<0&&(e=e.replace("cc-api-storage","cc-api-storage-creativesdk")),e):t(this._server,e)}.bind(this.dcxSession),this.dcxSession.getHrefForComposite=function(r,t){return r.href?r.href:this.AdobeDCXUtil.appendPathElements(e,"assets",t,r.id)}.bind(this);return this.dcxSession._getComponentHref=function(e,r,t,o){var n={assetId:e,component_id:r};void 0!==t&&(n.version=t);var s=this.AdobeDCXUtil.expandURITemplate("id/{+assetId}{;version}{?component_id}",n);return s?o(void 0,s):o(new this.AdobeDCXError(this.AdobeDCXError.UNEXPECTED_RESPONSE,"An error occurred when attempting expand manifest URI template."))}.bind(this),this.storageEnabled=!0,this.enabledDefer.resolve(),marvel.events.trigger("storage-enabled",!0),!0}.bind(this))},waitForQuiet:function(e,r){var n=t.defer(),s=(new Date,function(){(r?r(e):e.isMidCommit()||e._commitQueue.length>0||o.inProgress())?window.setTimeout(s,50):n.resolve(e)});return s(),n.promise}}}.apply(r,o))||(e.exports=n)},857:function(e,r,t){var o,n;o=[t(15),t(8),t(2),t(1781),t(14),t(605),t(3775),t(41),t(34),t(166)],void 0===(n=function(e,r,t,o,n,s,i,a,d,c){"use strict";var l=d.SparkPerformanceTracker;function p(e){this.message=e,this.name="AbortError"}return p.prototype.toString=function(){return this.name+" "+this.message},{createAbortHelper:function(e,r){var t,o;if(e){if(!r)throw new Error("Abort helper cannot be created without a deferral.");e.aborted?r.reject(new p("The dcx operation aborted")):o=function(){t.abort(),r.reject(new p("The dcx operation aborted")),e.removeEventListener("abort",o)}}return{get aborted(){return e&&e.aborted},get requestContext(){return t},set requestContext(r){if(r){if(e&&!e.aborted){var n=t;t=r,n||e.addEventListener("abort",o)}}else window.marvel.logger.warn("The context was not valid")},reset:function(){t&&(e.removeEventListener("abort",o),t=void 0),r=void 0,e=void 0}}},installDCX3Shim:function(){i.setStorageInstance(this)},loadBaseBranch:function(e){var r=t.defer();try{e.loadBaseBranch((function(t,o){t?r.reject(t):(o._core._compositeAssetId=e.assetId,r.resolve(o))}))}catch(o){window.marvel.logger.error("dcx-storage-utils unexpected error in loadBaseBranch",o),r.reject(o)}return r.promise},deleteCompositeDoc:function(e,r){var t=e.get("syncGroupName"),o=e.get("id"),n=this.syncGroups[t];return n&&n.removeCompositeDoc(e),this._deleteComposite(t,o,r)},_deleteComposite:function(e,r,o){var n,s=t.defer();n=-1===r.search(/urn/)?this.AdobeDCXUtil.appendPathElements(this.dcxSession._server,"assets",e,r)+"?recursive=true&invocation_mode=sync":this.AdobeDCXUtil.appendPathElements(this.dcxSession._server,"id",r)+"?recursive=true&invocation_mode=sync",this.logger.info("Invoke DCX DELETE",n);var i=this.createAbortHelper(o,s);return i.aborted?s.promise:(i.requestContext=this.dcxSession._service.invoke("DELETE",n,{"If-match":"*"},void 0,void 0,function(e,r){i.reset(),e?(this.logger.error("Delete failed with "+e,e),s.reject(e)):s.resolve()}.bind(this)),s.promise)},pullComposite:function(e,r){return this._pullCompositeWithRetry(e,!1,r)},_pullCompositeWithRetry:function(e,r,o){var n="pullComposite";r&&(n="pullCompositeManifestOnly");var s=0;return c(this._pullComposite.bind(this,e,r,o),{maxAttempts:6,shouldRetry:this._isRetryableError,counter_cb:function(){s++},loggerFn:window.marvel.logger.info.bind(window.marvel.logger),logMessagePrefix:"[Core:ClientStorage] RETRY: "})().then(function(e){return s>0&&window.marvel.logger.info("[Core:ClientStorage] "+n+" succeeded after retry ("+s+")"),e}.bind(this)).catch(function(r){var o=this.getDCXErrorDetails(r);return this._isRetryableError(r)?window.marvel.logger.warn("[Core:ClientStorage] "+n+" gave up after retry",{projectId:e.id,href:e._href,error:r,underlyingErrorDetails:o}):r&&"NO_COMPOSITE"===r.code?window.marvel.logger.info("[Core:ClientStorage] "+n+" encountered NO_COMPOSITE error",{projectId:e.id,href:e._href,error:r,underlyingErrorDetails:o}):window.marvel.logger.error("[Core:ClientStorage] "+n+" error",{projectId:e.id,href:e._href,error:r,underlyingErrorDetails:o}),t.reject(r)}.bind(this))},_isRetryableError:function(e){var r=e&&e.underlyingError||{},t=e.statusCode||r.response&&r.response.statusCode,o=e&&e.response&&e.response.response&&JSON.parse(e.response.response).message.indexOf("Quota exceeded")>-1;return e&&(this.DCXRetryCodes().includes(e.code)||500==t||503==t||504==t)&&!o},_pullComposite:function(e,r,o){var n=t.defer();try{var s=this.createAbortHelper(o,n);if(s.aborted)return n.promise;s.requestContext=this.dcx.compositeXfer.pullCompositeManifestOnly(e,this.dcxSession,function(t,o){var i;s.reset(),t?n.reject(t):r?n.resolve(o):(i=o?e.resolvePullWithBranch(o):e.current,n.resolve(i))}.bind(this))}catch(i){n.reject(i)}return n.promise},getDCXErrorDetails:function(e){var r=e.underlyingError||{},t={};try{r.additionalData&&(t.additionalData=r.additionalData),r.response&&(r.response.statusCode&&(t.responseStatusCode=r.response.statusCode),r.response.message&&(t.responseMessage=r.response.message),r.response.response&&(t.responseJSON=JSON.stringify(r.response.response.json)),r.response.xhr&&(delete r.response.xhr.headers.authorization,t.xhr={method:r.response.xhr.method,headers:JSON.stringify(r.response.xhr.headers),href:r.response.xhr.href,_errorCode:r.response.xhr._errorCode}))}catch(o){window.marvel.logger.info("[Client:Storage] failed to parse AdobeDCXError.",{error:o})}return t},pullCompositeManifestOnly:function(e,r){return this._pullCompositeWithRetry(e,!0,r)},pushComposite:function(e,r,o,n){var s=0,i=!1;return c(function(){return this._pushComposite(e,r,i||o,n)}.bind(this),{maxAttempts:6,shouldRetry:function(r){var t=this._isRetryableError(r);return!t&&r&&"INVALID_STATE"===r.code&&(t=!0,i=!0,this.logger.info("[Core:ClientStorage] pushComposite encountered INVALID_STATE, forcing push",{projectId:e.id,href:e._href,error:r})),t}.bind(this),counter_cb:function(){s++}})().then(function(e){return s>0&&this.logger.info("[Core:ClientStorage] pushComposite succeeded after retry ("+s+")"),e}.bind(this)).catch(function(r){return this._isRetryableError(r)?this.logger.warn("[Core:ClientStorage] pushComposite failed gave up after retry",{projectId:e.id,href:e._href,error:r}):!r||"UPDATE_CONFLICT"!==r.code&&"EXCEEDS_QUOTA"!==r.code?this.logger.error("[Core:ClientStorage] pushComposite failed not retryable",{projectId:e.id,href:e._href,error:r}):"EXCEEDS_QUOTA"===r.code?this.logger.warn("[Core:ClientStorage] pushComposite failed not retryable EXCEEDS_QUOTA",{projectId:e.id,href:e._href,error:r}):this.logger.info("[Core:ClientStorage] pushComposite encountered "+r.code,{projectId:e.id,href:e._href,error:r}),a.trackEvent("core:dcxClientSaveFailure",{},"core:storage"),t.reject(r)}.bind(this))},_pushComposite:function(e,r,o,n){var s=t.defer(),i=this.createAbortHelper(n,s);return i.aborted?s.promise:(e.href||(e.href=this.dcxSession.getHrefForComposite(e,r)),window.marvel.events.trigger("push-composite-start",{syncGroupName:r,composite:e,override:o}),i.requestContext=this.dcx.compositeXfer.pushComposite(e,!!o,this.dcxSession,function(r,t){if(i.reset(),r)s.reject(r);else{var o=e.acceptPush();s.resolve(o)}}.bind(this)),s.promise)},_convertCanvas:function(e){var r=t.defer();return e.canvas.toBlob(function(e){var t=URL.createObjectURL(e),o=document.createElement("img");o.onload=function(){r.resolve({blob:e,url:t,img:this})},o.onerror=function(){URL.revokeObjectURL(t),r.reject(new Error("StorageDCXUtilsMixin::_convertCanvas::newImage::onerror"))},o.src=t}.bind(this)),r.promise},pushCanvasComponent:function(e,r,t,o,n){return this._convertCanvas(e.copyFrom).then(function(s){return delete e.copyFrom,e.file=s.blob,this.pushComponent(e,r,t,o,n)}.bind(this))},_dataURLtoBlob:function(e){var r;r=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):window.unescape(e.split(",")[1]);for(var t=e.split(",")[0].split(":")[1].split(";")[0],o=new Uint8Array(r.length),n=0;n<r.length;n++)o[n]=r.charCodeAt(n);return new Blob([o],{type:t})},pushDataUrlComponent:function(e,r,t,o,n){return e.file=this._dataURLtoBlob(e.copyFrom.url),delete e.copyFrom,this.pushComponent(e,r,t,o,n)},pushComponentWithoutRetry:function(e,r,t,o,n){return this._pushComponent(e,r,t,o,n)},pushComponent:function(e,r,o,n,s){var i=0;return c(this._pushComponent.bind(this,e,r,o,n,s),{maxAttempts:6,shouldRetry:this._isRetryableError,counter_cb:function(){i++}})().then(function(e){return i>0&&this.logger.info("[Core:ClientStorage] pushComponent succeeded after retry ("+i+")",{projectId:r.id,assetId:r._assetId}),e}.bind(this)).catch(function(e){var o=this.getDCXErrorDetails(e);return this._isRetryableError(e)?this.logger.warn("[Core:ClientStorage] pushComponent failed gave up after retry",{projectId:r.id,href:r._href,error:e,underlyingErrorDetails:o}):e&&"EXCEEDS_QUOTA"===e.code?this.logger.warn("[Core:ClientStorage] pushComponent failed not retryable EXCEEDS_QUOTA",{projectId:r.id,href:r._href,error:e,underlyingErrorDetails:o}):e&&0===e.readyState?this.logger.info("[Core:ClientStorage] pushComponent failed readyState zero",{projectId:r.id,href:r._href,error:e,statusText:e.statusText,underlyingErrorDetails:o}):e&&!0===e.isDownloadErr?this.logger.info("[Core:ClientStorage] pushComponent failed due to download failure",{projectId:r.id,href:r._href,error:e,underlyingErrorDetails:o}):this.logger.error("[Core:ClientStorage] pushComponent failed not retryable",{projectId:r.id,href:r._href,error:e,underlyingErrorDetails:o}),a.trackEvent("core:dcxClientSaveFailure",{},"core:storage"),t.reject(e)}.bind(this))},_pushComponent:function(e,r,o,n,s){var i,a,d,c,l=t.defer(),p=this.createAbortHelper(s,l);if(p.aborted)return l.promise;window.marvel.events.trigger("push-component-start",{syncGroupName:o,composite:r,componentAttrs:e,isUpdate:n});try{if(i=e.copyFrom){if("canvas"===i.source)return this.pushCanvasComponent(e,r,o,n);if("dataUrl"===i.source)return this.pushDataUrlComponent(e,r,o,n)}if(a=e.cover,c=function(t,o){if(p.reset(),t){var s=this.getDCXErrorDetails(t);return t.isDownloadErr?415===t.status||404===t.status||410===t.status?this.logger.warn("[Core:ClientStorage] Upload warning in download with"+t.message,{error:t,projectId:r.id,assetId:r._assetId,underlyingErrorDetails:s}):this.logger.error("[Core:ClientStorage] Upload failed in download with "+t.message,{error:t,projectId:r.id,assetId:r._assetId,underlyingErrorDetails:s}):this.logger.error("[Core:ClientStorage] Upload failed with "+t,{error:t,projectId:r.id,assetId:r._assetId,underlyingErrorDetails:s}),l.reject(t)}try{var i=r.current;if(n){var a=e.absolutePath||"/"+e.path;d=i.getComponentWithAbsolutePath(a),d=i.updateComponentWithUploadResults(d,o),l.resolve(d)}else d=i.addComponentWithUploadResults(e.name,e.relationship,e.path,e.parent||i.rootNode,o),l.resolve(d)}catch(c){this.logger.error("[Core:ClientStorage] uploadComplete error in _pushComponent:"+e.path+" "+e,{error:c,projectId:r.id,assetId:r._assetId}),c.uploadResults=o,l.reject(c)}}.bind(this),n){var u=e.absolutePath||"/"+e.path;if(d=r.current.getComponentWithAbsolutePath(u))i?this.transload(r,d,i,c):a?this.uploadCover(r,d,a,c):p.requestContext=this.dcx.compositeXfer.uploadComponent(d,e.file,r,this.dcxSession,c);else{var h="null component in pushComponent:"+e.path+" "+e,f=new Error(h);this.logger.error(h,{error:f,projectId:r.id,assetId:r._assetId}),l.reject(f)}}else i?this.transload(r,e.id,i,c,o):a?this.uploadCover(r,e.id,a,c):p.requestContext=this.dcx.compositeXfer.uploadNewComponent(e.file,e.type,r,e.id,this.dcxSession,c)}catch(g){this.logger.error("unexpected error caught in pushComponent",{error:g,projectId:r.id,assetId:r._assetId}),l.reject(g)}return l.promise},transload:function(t,o,s,i,a){var d,c,l,p=s.source;"string"==typeof o?l=o:o?(c=o,l=o.id):l=this.AdobeDCXUtil.generateUuid();var u=["image/png","image/jpeg"];switch(p){case"dooplo":d=s.assetId.replace(/^https?\:\/\/[^\.]*\.adobe\.io\/api\/v1\/assets\/([^\/]*)\/.*$/,"$1");break;case"dropbox":d=s.assetId.replace(/^https?\:\/\/[^\/]*\/db_files\/(.*)$/,"$1");break;case"lightroom":d=s.assetId.replace(/^https?\:\/\/[^\/]*\/lr_files\/(.*)$/,"$1");break;case"cc":d=s.assetId.replace(/^https?\:\/\/[^\/]*\/files\/(.*)$/,"$1");break;case"ccl":d=s.assetId;break;case"google drive":d=s.assetId,p="googleDrive";break;case"google photos":d=s.assetId,p="google";break;case"facebook":d=s.assetId,p="facebook";break;case"cp":d=s.assetId;break;case"cclight":case"cc light design assets":d=s.assetId,p="cclight",u=null;break;default:if(!p){var h=new Error("falsy imageSource in transload: "+p);return this.logger.error(h.message,{err:h,composite:t,copyFrom:s}),i(h)}d=s.assetId}t.href||(t.href=this.dcxSession.getHrefForComposite(t,a));var f={asset_id:d,path:t.href.replace(/^(?:[^\.]*\.adobe\.io)\/([^\#\?]*)([^\#]*)(.*)$/,"$1")+"/"+l,allowedTypes:u},g=this.AdobeDCXUtil.generateUuid(),m={method:"PUT",url:"/transload/"+p,dataType:"json",data:f,beforeSend:function(e){e.setRequestHeader("X-Request-Id",g)},success:function(e,r,o){if(200!=o.status)return i(new Error("Transload came back with "+o.status+" "+o.responseText));var n=this.createUploadResults(t.id,t.assetId),a=s.componentMimeType||e.type,d=this.createUploadRecord(l,o.getResponseHeader("etag"),o.getResponseHeader("x-latest-version"),e.md5,e.size,a);n.addUploadRecord(l,d),i(null,n)}.bind(this),error:function(e){try{var t=JSON.parse(e.responseText||e.response);e.isDownloadErr=t.isDownloadErr,e.message=t.error,e.imageService=p}catch(o){r.extend(e,{data:f,url:"/transload/"+p,requestId:g}),this.logger.error("Bad error response in transload",e)}return n.checkIsOffline(),i(e)}.bind(this)};c&&(m.headers={"If-Match":c.etag}),e.ajax(m)},upload:function(r,t,o,s){var i;i=o?o.id:this.AdobeDCXUtil.generateUuid();var a=new FormData;a.append("path",t.href.replace(/^https?\:\/\/[^\.]*\.adobe\.io\/([^\#\?]*)([^\#]*)(.*)$/,"$1")+"/"+i),a.append("file",r);var d={method:"PUT",url:"/transload/font",dataType:"json",data:a,processData:!1,contentType:!1,success:function(e,r,o){if(200!=o.status&&201!=o.status)return s(new Error("Upload came back with "+o.status+" "+o.responseText));var n=this.createUploadResults(t.id,t.assetId),a=this.createUploadRecord(i,o.getResponseHeader("etag"),o.getResponseHeader("x-latest-version"),e.md5,e.size,e.type);n.addUploadRecord(i,a),s(null,n)}.bind(this),error:function(e){return n.checkIsOffline(),s(e)}.bind(this)};o&&(d.headers={"If-Match":o.etag}),e.ajax(d)},uploadCover:function(r,t,o,n){var s,i;i="string"==typeof t?t:t?(s=t).id:o.target.split("/")[1];var a={method:"POST",url:"/cover",dataType:"json",data:{source_path:o.source,target_path:o.target,x:o.x,y:o.y,type:o.type},success:function(e,t,o){if(200!=o.status)return n(new Error("Cover came back with "+o.status+" "+o.responseText));var s=this.createUploadResults(r.id,r.assetId),a=this.createUploadRecord(i,o.getResponseHeader("etag"),o.getResponseHeader("x-latest-version"),e.md5,e.size,e.type);s.addUploadRecord(i,a),n(null,s)}.bind(this),error:function(e){return n(e)}};s&&(a.headers={"If-Match":s.etag}),e.ajax(a)},_stripEtag:function(e){return e&&0===e.indexOf('"')&&(e=e.substring(1)),e&&e.indexOf('"')===e.length-1&&(e=e.substring(0,e.length-1)),e},_privateGetComponentHref:function(e,r,o){var n=t.defer(),s=this.createAbortHelper(o,n);return s.aborted?n.promise:(s.requestContext=this.dcxSession.getComponentHref(r,void 0,(function(e,r){s.reset(),e?(window.marvel.logger.error("failed to get component href",e),n.reject(e)):n.resolve(r)})),n.promise)},getComponentRenditionHref:function(e,r,o,n){var s,i,a=t.defer();r instanceof this.AdobeDCXComponent?i="/"+(s=r).path:(i=r,s=e.current.getComponentWithAbsolutePath(i));var d=0;return c(this._getComponentRenditionHref.bind(this,s,i,o,n),{maxAttempts:6,shouldRetry:this._isRetryableError,counter_cb:function(){d++},loggerFn:window.marvel.logger.debug.bind(window.marvel.logger),logMessagePrefix:"[Core:ClientStorage] getComponentRenditionHref"})().then((function(r){window.marvel.logger.info("[Core:ClientStorage] getComponentRenditionHref succeeded",{compositeAssetId:e.assetId,compositeType:e.current.type,componentId:s.id,href:r,size:o,mime:n,retries:d}),a.resolve(r)})).catch((function(r){window.marvel.logger.error("[Core:ClientStorage] getComponentRenditionHref failed",{compositeAssetId:e.assetId,compositeType:e.current.type,componentId:s.id,size:o,mime:n,retries:d,error:r}),a.reject(r)})),a.promise},_getComponentRenditionHref:function(e,r,t,o){return new Promise(function(n,s){this.dcxSession.getComponentRenditionHref(e,e.version,t,function(t,i){var a;t?s(t):(0===(i=i.replace(this.storageServer,window.location.host)).indexOf(window.location.host+"/assets/")?(i=i.replace(/\/assets/,"/image_assets"),a=/^(https?\:\/\/[^\/]+\/image_assets\/[^\/]+\/[^\/]+)\/.*$/):(i=i.replace(/\/id/,"/image_assets"),window.marvel.logger.traceflow("dcx-3","getComponentRenditionHref "+JSON.stringify({href:i,componentId:e.id,etag:e.etag})),a=/^(https?\:\/\/[^\/]+\/id\/[^\/]+)\/.*$/),i=i.replace(a,"$1"+r+"?asset_id="+e.id+"&img_etag="+this._stripEtag(e.etag)+"&version="+e.version),o&&(i+="&mime="+encodeURIComponent(o)),n(i))}.bind(this))}.bind(this))},getComponent:function(e,r,o){var s,i,a=t.defer();return e instanceof this.AdobeDCXComponent?s=e:(i=e,s=r.current.getComponentWithAbsolutePath(i)),s?this._getComponentWithRetry(s,o).then(function(e){window.marvel.logger.info("[Core:ClientStorage] getComponent succeeded",{compositeAssetId:r.assetId,compositeType:r.current.type,componentId:s.id,retries:e.retries}),a.resolve(e.DCXResponse.response)}.bind(this)).catch(function(e){n.checkIsOffline().then((function(t){var o={compositeAssetId:r.assetId,compositeType:r.current.type,componentId:s.id,error:e.DCXError,retries:e.retries};t?window.marvel.logger.warn("[Core:ClientStorage] getComponent failed because we were offline",o):window.marvel.logger.error("[Core:ClientStorage] getComponent failed",o)})),a.reject(e.DCXError)}.bind(this)):a.resolve(),a.promise},_getComponentWithRetry:function(e,r){var t=0;return c(this._getComponent.bind(this,e,r),{maxAttempts:6,shouldRetry:this._isRetryableError,counter_cb:function(){t++},loggerFn:window.marvel.logger.debug.bind(window.marvel.logger),logMessagePrefix:"[Core:ClientStorage] getComponent"})().then((function(e){return{retries:t,DCXResponse:e}})).catch((function(e){var r=new Error("getComponent DCX failure after retries");throw r.retries=t,r.DCXError=e,r}))},_getComponent:function(e,r){var o=t.defer(),n=this.createAbortHelper(r,o);return n.aborted?o.promise:(n.requestContext=this.dcxSession.getComponent(e,"text",(function(e,r){if(n.reset(),e||200!==r.statusCode){var t=e||r;o.reject(t)}else o.resolve(r)})),l.measurePromise("StorageDCXUtils.getComponent:"+e.id,o.promise))}}}.apply(r,o))||(e.exports=n)},858:function(e,r,t){var o,n;o=[t(853)],void 0===(n=function(e){var r=e.AdobeDCXError;return{DCXRetryCodes:function(){return[r.NETWORK_ERROR,r.RETRYABLE_SERVER_ERROR,r.TIMED_OUT,r.UNEXPECTED_RESPONSE,r.COMPONENT_DOWNLOAD_ERROR,r.COMPONENT_UPLOAD_ERROR,r.UNEXPECTED,r.NO_COMPOSITE]}}}.apply(r,o))||(e.exports=n)}}]);
//# sourceMappingURL=m-storage-b0f2472c.js.map