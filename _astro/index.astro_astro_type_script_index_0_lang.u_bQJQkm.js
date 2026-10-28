import{A as e,B as t,C as n,D as r,E as i,F as a,H as o,I as s,L as c,M as l,N as u,O as d,P as f,R as p,S as m,T as h,U as g,V as _,_ as v,a as y,b,c as x,d as S,f as C,g as w,h as ee,i as T,j as E,k as te,l as ne,m as re,n as ie,o as D,p as O,r as k,s as ae,t as oe,u as se,v as A,w as ce,x as j,y as le,z as M}from"./skybox.DfqBrzCp.js";var ue={type:`change`},N={type:`start`},de={type:`end`},P=new e,fe=new i,pe=Math.cos(70*le.DEG2RAD),F=new o,I=2*Math.PI,L={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},me=1e-6,he=class extends ae{constructor(e,t=null){super(e,t),this.state=L.NONE,this.target=new o,this.cursor=new o,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:A.ROTATE,MIDDLE:A.DOLLY,RIGHT:A.PAN},this.touches={ONE:M.ROTATE,TWO:M.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new o,this._lastQuaternion=new d,this._lastTargetPosition=new o,this._quat=new d().setFromUnitVectors(e.up,new o(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new s,this._sphericalDelta=new s,this._scale=1,this._panOffset=new o,this._rotateStart=new _,this._rotateEnd=new _,this._rotateDelta=new _,this._panStart=new _,this._panEnd=new _,this._panDelta=new _,this._dollyStart=new _,this._dollyEnd=new _,this._dollyDelta=new _,this._dollyDirection=new o,this._mouse=new _,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_e.bind(this),this._onPointerDown=ge.bind(this),this._onPointerUp=ve.bind(this),this._onContextMenu=Te.bind(this),this._onMouseWheel=xe.bind(this),this._onKeyDown=Se.bind(this),this._onTouchStart=Ce.bind(this),this._onTouchMove=we.bind(this),this._onMouseDown=ye.bind(this),this._onMouseMove=be.bind(this),this._interceptControlDown=Ee.bind(this),this._interceptControlUp=De.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=L.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ue),this.update(),this.state=L.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;F.copy(t).sub(this.target),F.applyQuaternion(this._quat),this._spherical.setFromVector3(F),this.autoRotate&&this.state===L.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=I:n>Math.PI&&(n-=I),r<-Math.PI?r+=I:r>Math.PI&&(r-=I),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(F.setFromSpherical(this._spherical),F.applyQuaternion(this._quatInverse),t.copy(this.target).add(F),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=F.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new o(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new o(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=F.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(P.origin.copy(this.object.position),P.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(P.direction))<pe?this.object.lookAt(this.target):(fe.setFromNormalAndCoplanarPoint(this.object.up,this.target),P.intersectPlane(fe,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>me||8*(1-this._lastQuaternion.dot(this.object.quaternion))>me||this._lastTargetPosition.distanceToSquared(this.target)>me?(this.dispatchEvent(ue),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?I/60/60*this.autoRotateSpeed:I/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){F.setFromMatrixColumn(t,0),F.multiplyScalar(-e),this._panOffset.add(F)}_panUp(e,t){this.screenSpacePanning===!0?F.setFromMatrixColumn(t,1):(F.setFromMatrixColumn(t,0),F.crossVectors(this.object.up,F)),F.multiplyScalar(e),this._panOffset.add(F)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;F.copy(r).sub(this.target);let i=F.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(I*this._rotateDelta.x/t.clientHeight),this._rotateUp(I*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(I*this._rotateDelta.x/t.clientHeight),this._rotateUp(I*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new _,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function ge(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function _e(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function ve(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(de),this.state=L.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function ye(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case A.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=L.DOLLY;break;case A.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=L.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=L.ROTATE}break;case A.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=L.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=L.PAN}break;default:this.state=L.NONE}this.state!==L.NONE&&this.dispatchEvent(N)}function be(e){switch(this.state){case L.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case L.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case L.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function xe(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===L.NONE&&(e.preventDefault(),this.dispatchEvent(N),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(de))}function Se(e){this.enabled!==!1&&this._handleKeyDown(e)}function Ce(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case M.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=L.TOUCH_ROTATE;break;case M.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=L.TOUCH_PAN;break;default:this.state=L.NONE}break;case 2:switch(this.touches.TWO){case M.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=L.TOUCH_DOLLY_PAN;break;case M.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=L.TOUCH_DOLLY_ROTATE;break;default:this.state=L.NONE}break;default:this.state=L.NONE}this.state!==L.NONE&&this.dispatchEvent(N)}function we(e){switch(this._trackPointer(e),this.state){case L.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case L.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case L.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case L.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=L.NONE}}function Te(e){this.enabled!==!1&&e.preventDefault()}function Ee(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function De(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Oe=new i,ke=new E,R=new _,Ae=new o,je=class extends he{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:A.PAN,MIDDLE:A.DOLLY,RIGHT:A.ROTATE},this.touches={ONE:M.PAN,TWO:M.DOLLY_ROTATE},this._panWorldStart=new o}_handleMouseDownPan(e){if(super._handleMouseDownPan(e),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;Oe.setFromNormalAndCoplanarPoint(this.object.up,this.target);let t=this.domElement.getBoundingClientRect();R.x=(e.clientX-t.left)/t.width*2-1,R.y=-((e.clientY-t.top)/t.height)*2+1,ke.setFromCamera(R,this.object),ke.ray.intersectPlane(Oe,this._panWorldStart)}_handleMouseMovePan(e){if(this.screenSpacePanning===!0){super._handleMouseMovePan(e);return}let t=this.domElement.getBoundingClientRect();R.x=(e.clientX-t.left)/t.width*2-1,R.y=-((e.clientY-t.top)/t.height)*2+1,ke.setFromCamera(R,this.object),ke.ray.intersectPlane(Oe,Ae)&&(Ae.sub(this._panWorldStart),this._panOffset.copy(Ae).negate(),this.update())}},Me=(e,t,n)=>new D(e,t,n);function Ne(e={}){return new m({blending:2,transparent:!0,depthWrite:!1,side:2,toneMapped:!1,...e})}var Pe=2e5,Fe=4e4,Ie=27e5,Le=13e4,Re=Me(.85,.97,1),ze=Me(.45,.65,.95),Be=class{group=new O;head;tail;headMaterial;tailMaterial;v=new o;m=new b;constructor(){this.headMaterial=new p({map:Ve(),blending:2,transparent:!0,depthWrite:!1,toneMapped:!1}),this.head=new c(this.headMaterial),this.tailMaterial=Ne({vertexColors:!0}),this.tail=new j(He(),this.tailMaterial),this.tail.matrixAutoUpdate=!1,this.group.add(this.tail,this.head)}update(e,t){let n=e.comet,r=n.glow*(1-.85*e.sunLight);if(this.group.visible=r>.005,!this.group.visible)return;let i=this.v.set(...n.pos),a=i.distanceTo(t),s=a>Pe?Pe/a:1,c=i.sub(t).multiplyScalar(s).add(t);this.head.position.copy(c),this.head.scale.setScalar(Fe*s*(.5+.5*n.glow)),this.headMaterial.color.copy(Re).multiplyScalar(r);let l=t.clone().sub(c).normalize(),u=new o(...n.tail),d=u.clone().addScaledVector(l,-u.dot(l)).normalize(),f=l.clone().cross(d);this.m.makeBasis(d,f,l),this.m.scale(new o(Ie*s*n.glow,Le*s*Math.sqrt(n.glow),1)),this.m.setPosition(c),this.tail.matrix.copy(this.m),this.tailMaterial.color.copy(ze).multiplyScalar(r)}};function Ve(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),r=t.createImageData(32,32);for(let e=0;e<32;e++)for(let t=0;t<32;t++){let n=(t+.5)/32*2-1,i=(e+.5)/32*2-1,a=Math.max(0,1-Math.hypot(n,i))**1.6,o=Math.round(a*6)/6;r.data.set([o*255,o*255,o*255,255],(e*32+t)*4)}t.putImageData(r,0,0);let i=new y(e);return i.magFilter=n,i.minFilter=n,i.generateMipmaps=!1,i}function He(){let e=[],t=[];for(let n=0;n<=12;n++){let r=n/12,i=.08+.42*Math.sqrt(r),a=(1-r)**1.5;for(let[n,o]of[[-i,0],[-.3*i,.6],[0,1],[.3*i,.6],[i,0]])e.push(r,n,0),t.push(o*a,o*a,o*a)}let n=[];for(let e=0;e<12;e++)for(let t=0;t<4;t++){let r=e*5+t,i=(e+1)*5+t;n.push(r,i,r+1,r+1,i,i+1)}let r=new T;return r.setAttribute(`position`,new C(e,3)),r.setAttribute(`color`,new C(t,3)),r.setIndex(n),r}var Ue=24,We=500,Ge=2.5,Ke=Me(.95,.97,1),qe=Me(1,.8,.45),Je=160,Ye=class{sky;mesh;position=new Float32Array(23040);colour=new Float32Array(23040);geometry=new T;stars=[];until=-1/0;constructor(e){this.sky=e,this.geometry.setAttribute(`position`,new k(this.position,3).setUsage(S)),this.geometry.setAttribute(`color`,new k(this.colour,3).setUsage(S));let t=new Uint32Array(22080);for(let e=0;e<Je;e++)for(let n=0;n<23;n++){let r=(e*Ue+n)*2,i=r+2;t.set([r,r+1,i,r+1,i+1,i],(e*23+n)*6)}this.geometry.setIndex(new k(t,1)),this.mesh=new j(this.geometry,Ne({vertexColors:!0})),this.mesh.frustumCulled=!1}update(e,t){let n=e.time;(n>this.until||n<this.until-120)&&(this.stars=this.sky.meteors(n,n+60),this.until=n+60);let r=0,i=new o,a=new o,s=new o;for(let o of this.stars){let c=n-o.start;if(c<0||c>o.burn+o.fade||r>=Je)continue;let l=(o.fireball?2:Math.max(0,1-e.sunLight))*1;if(l<=.01)continue;let u=Math.min(c,o.burn),d=Math.min(1,Math.max(0,1-Math.max(0,c-o.burn)/o.fade)),f=o.fireball?We*Ge:We,p=o.fireball?qe:Ke;i.set(...o.velocity).normalize();for(let e=0;e<Ue;e++){let n=u*e/23;a.set(o.from[0]+o.velocity[0]*n,o.from[1]+o.velocity[1]*n,o.from[2]+o.velocity[2]*n);let m=c-n,h=(m<0?0:Math.min(1,Math.max(0,1-m/o.fade))**2)*d*l,g=f*(.3+.7*e/23)*(c>o.burn?.7:1);s.subVectors(a,t).crossVectors(i,s).normalize().multiplyScalar(g/2);let _=(r*Ue+e)*2*3;this.position.set([a.x-s.x,a.y-s.y,a.z-s.z,a.x+s.x,a.y+s.y,a.z+s.z],_);let v=[p.r*h,p.g*h,p.b*h];this.colour.set([...v,...v],_)}r++}this.geometry.setDrawRange(0,r*23*6),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,this.mesh.visible=r>0}},Xe=32,Ze=.75,Qe=720,$e=new D().setRGB(.85,.8,.7,u),et=.8;function tt(){let e=[.62,.58,.54],t=[.96,.88,.7],n=[.86,.76,.58],r=[.84,.76,.62],i=[.76,.68,.56],a=[.92,.9,.86];return Array.from({length:Xe},(o,s)=>{let c=s%2==0,[l,u]=[e,0];return s<=1?[l,u]=[e,.14]:s<=8?[l,u]=[e,c?.3:.42]:s<=18?[l,u]=[c?t:n,c?1:.86]:s<=20?[l,u]=[e,.04]:s===26?[l,u]=[r,0]:s<=27?[l,u]=[c?r:i,.68]:s===29&&([l,u]=[a,.5]),new g(l[0],l[1],l[2],u*Ze)})}function z(e,t){let n=(Math.imul(e>>>0,2654435761)^t)>>>0;return n=(n^n>>>15)>>>0,n=Math.imul(n,739982445)>>>0,n=(n^n>>>12)>>>0,(n&65535)/65535}var nt=class{mesh;material;constructor(e){this.material=new a({uniforms:{uRows:{value:tt()},uColour:{value:new D}},blending:2,transparent:!0,depthWrite:!1,side:2,vertexShader:`
				#include <common>
				#include <logdepthbuf_pars_vertex>
				attribute float clump;
				varying vec2 vUv;
				varying float vClump;
				void main() {
					vUv = uv;
					vClump = clump;
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
					#include <logdepthbuf_vertex>
				}
			`,fragmentShader:`
				#include <common>
				#include <logdepthbuf_pars_fragment>
				uniform vec4 uRows[32];
				uniform vec3 uColour;
				varying vec2 vUv;
				varying float vClump;
				// Each row of dust thinned by ordered dithering in screen
				// pixels, two by two, so the sky shows through.
				float bayer(ivec2 c) {
					int i = c.y * 4 + c.x;
					float b[16] = float[16](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
					return b[i];
				}
				void main() {
					#include <logdepthbuf_fragment>
					vec4 row = uRows[clamp(int(floor(vUv.x * 32.0)), 0, 31)];
					float thick = row.a * (0.55 + 0.45 * vClump);
					ivec2 cell = ivec2(floor(gl_FragCoord.xy / 2.0)) & ivec2(3, 3);
					if (thick <= (bayer(cell) + 0.5) / 16.0) discard;
					gl_FragColor = vec4(uColour * vClump * row.rgb, 1.0);
					#include <colorspace_fragment>
				}
			`}),this.mesh=new j(rt(e),this.material),this.mesh.frustumCulled=!1}update(e,t){let n=Math.max(e.eclipses[0].dark,e.eclipses[1].dark),r=t?e.sunLight*(1-n):0;this.material.uniforms.uColour.value.copy($e).multiplyScalar(et+-.74*r)}};function rt(e){let t=new o(...e.axis),n=new o(...e.touch).normalize(),r=t.clone().cross(n),i=2*e.width,a=2.5*e.width,s=9.5*e.width,c=(i,a)=>{let o=Math.PI*2*i,s=n.clone().multiplyScalar(Math.cos(o)).addScaledVector(r,Math.sin(o)).multiplyScalar(e.radius);return s.addScaledVector(t,a),[s.x,s.y,s.z]},l=(t,n,r)=>{if(!r)return c(t,n*i);let o=-a+(n+.5)*(a+s),l=c(t,0),u=1+o/e.radius;return[l[0]*u,l[1]*u,l[2]*u]},u=[],d=[],f=[],p=[];for(let e=0;e<Qe;e++){let t=(((e+.5)/Qe-0+.5)%1+1)%1-.5,n=Math.max(0,1-Math.abs(t)/.08),r=.5*z(Math.floor(e/3),625341585)+.5*z(e+7e3,625341585),i=Math.min(1,Math.round((.25+.5*r+.5*n)*4)/4),[a,o]=[e/Qe,(e+1)/Qe];for(let e of[!1,!0]){let t=u.length/3;for(let[t,n]of[[a,-.5],[a,.5],[o,.5],[o,-.5]])u.push(...l(t,n,e)),d.push(n+.5,t),f.push(i);p.push(t,t+1,t+2,t,t+2,t+3)}}let m=new T;return m.setAttribute(`position`,new C(u,3)),m.setAttribute(`uv`,new C(d,2)),m.setAttribute(`clump`,new C(f,1)),m.setIndex(p),m}var it=[{radius:3e4,floor:4e3,from:.4,span:3.4,phase:0,cycle:3.1},{radius:22e3,floor:6e3,from:2.6,span:2.6,phase:1.7,cycle:2.3},{radius:36e3,floor:7e3,from:4.1,span:2.2,phase:3.9,cycle:4.2},{radius:26e3,floor:5e3,from:5.3,span:2.8,phase:5.1,cycle:2.7},{radius:17e3,floor:3500,from:1.2,span:2,phase:2.4,cycle:3.6},{radius:33e3,floor:6500,from:3,span:1.8,phase:4.4,cycle:1.9}],at=160,ot=2500,st=[0,.06,.3,.55,.8,1],ct=[[.12,1,.35],[.1,.85,.8],[.55,.2,.9]],lt=[.3,1,.75,.55,.35,0],B=[[[.03,.3,.1],[.12,1,.35],[.08,.7,.3],[.7,.18,.4],[.38,.1,.55],[0,0,0]],[[.03,.25,.25],[.1,.85,.8],[.15,.4,.75],[.85,.12,.65],[.3,.1,.7],[0,0,0]],[[.15,.3,.03],[.55,1,.15],[.3,.75,.1],[.9,.15,.1],[.5,.04,.12],[0,0,0]],[[.03,.2,.3],[.2,.8,1],[.1,.45,.9],[.2,.2,.95],[.25,.08,.6],[0,0,0]]],ut=6e3,dt=.015,V=256,ft=2e4,pt=class{domeRadius;mesh;geometry=new T;position;colour;uv;constructor(e){this.domeRadius=e;let t=it.length*161*st.length;this.position=new Float32Array(t*3),this.colour=new Float32Array(t*3),this.uv=new Float32Array(t*2),this.geometry.setAttribute(`position`,new k(this.position,3).setUsage(S)),this.geometry.setAttribute(`color`,new k(this.colour,3).setUsage(S)),this.geometry.setAttribute(`uv`,new k(this.uv,2).setUsage(S));let n=st.length,r=[];for(let e=0;e<it.length;e++){let t=e*161*n;for(let e=0;e<at;e++)for(let i=0;i<n-1;i++){let a=t+e*n+i,o=t+(e+1)*n+i;r.push(a,o,a+1,a+1,o,o+1)}}this.geometry.setIndex(r),this.mesh=new j(this.geometry,Ne({vertexColors:!0,map:ht()})),this.mesh.frustumCulled=!1}update(e){let t=e.aurora*(1-e.sunLight)**2;if(this.mesh.visible=t>.01,!this.mesh.visible)return;let n=performance.now()/1e3%(Math.PI*2*1e3),r=e.time/60%1e4;this.hang(n,r,t);for(let e of[`position`,`color`,`uv`])this.geometry.attributes[e].needsUpdate=!0}onDome(e,t){let n=.97*this.domeRadius,r=Math.hypot(e,t);r>n&&([e,t]=[e*n/r,t*n/r]);let i=Math.sqrt(Math.max(0,1-(e*e+t*t)/(this.domeRadius*this.domeRadius)));return[e,ft*i,t]}hang(e,t,n){let r=st.length,i=Math.floor((t+12)/24);it.forEach((a,o)=>{let s=o*161*r,c=(o+i*3)%B.length,l=(c+1+(o+i)%(B.length-1))%B.length,u=(o+i)%3==0?null:ct[(o*2+i)%ct.length],d=Math.sin(Math.PI*2*t/a.cycle+a.phase),f=Math.min(1,Math.max(0,(d+.4)/1.2)),p=0,m=mt(a,0,0,e);for(let t=0;t<=at;t++){let i=t/at,o=mt(a,i,0,e);p+=Math.hypot(o[0]-m[0],o[1]-m[1]),m=o;let d=Math.min(1,Math.max(0,(.5*f-Math.abs(i-.5))/.1)),h=.5+.5*Math.sin(11*i-.9*e+a.phase),g=.5+.5*Math.sin(4*i+.3*e+2*a.phase),_=d*Math.sqrt(f)*(.3+.7*h*g)*n,v=.5+.5*Math.sin(2.2*i+.12*e+a.phase)*(.6+.4*Math.cos(.05*e+a.phase)),y=a.floor+ot*Math.sin(2.3*i+.04*e+1.3*a.phase)+1500*(.5+.5*Math.sin(9*i-1.1*e+a.phase)),b=14500*(.6+.4*Math.sin(5*i+.25*e+a.phase)),x=p/ut+dt*e;st.forEach((n,o)=>{let d=mt(a,i,n,e),f=this.onDome(d[0],d[1]),p=Math.hypot(...f)||1,m=y+b*n,h=s+t*r+o;this.position.set([f[0]+f[0]/p*m,f[1]+f[1]/p*m,f[2]+f[2]/p*m],h*3);let g=u?[u[0]*lt[o],u[1]*lt[o],u[2]*lt[o]]:[0,1,2].map(e=>B[c][o][e]+(B[l][o][e]-B[c][o][e])*v);this.colour.set([g[0]*_,g[1]*_,g[2]*_],h*3),this.uv.set([x,n],h*2)})}})}};function mt(e,t,n,r){let i=e.from+e.span*t+.002*r,a=6e3*Math.sin(3*i-.35*r+e.phase)+3e3*Math.sin(7*i+.6*r+2*e.phase)+1200*Math.sin(17*i-1.3*r),o=2500*n*Math.sin(5*i+.8*r+3*e.phase),s=e.radius+a+o;return[Math.cos(i)*s,Math.sin(i)*s]}function ht(){let e=(e,t)=>{let n=e*t,r=Math.floor(n),i=n-r;i=i*i*(3-2*i);let a=z(r%t+t*7,1540483477);return a+(z((r+1)%t+t*7,1540483477)-a)*i},t=new Uint8Array(V*4*4);for(let n=0;n<V;n++){let r=n/V,i=z(n+911,1540483477),a=Math.floor((.2+.8*i*i)*(.45+.55*e(r,8))*255);for(let e=0;e<4;e++)t.set([a,a,a,255],(e*V+n)*4)}let r=new ne(t,V,4);return r.colorSpace=u,r.wrapS=l,r.magFilter=n,r.minFilter=n,r.needsUpdate=!0,r}var gt=2e4,_t=20,vt=64,yt=new o(.66,.8,1),bt=new o(.3,.5,.86),xt=.97,St=new o(.2,.19,.42),Ct=new o(.86,.46,.6),wt=new o(1,.52,.18),Tt=new g(.55,.72,1,.5),Et=new g(.35,.45,.75,.25),Dt=.1,Ot=.5,kt=.3,At=100,jt=.99996,Mt=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},H=e=>Math.min(1,Math.max(0,e)),Nt=class{radius;group=new O;shell;dome;colour;coloured=null;constructor(e){this.radius=e,this.shell=new j(this.shape(!0),new a({uniforms:{uColour:{value:new D},uAlpha:{value:0},uKeep:{value:0}},transparent:!0,depthWrite:!1,side:2,vertexShader:`
					#include <common>
					#include <logdepthbuf_pars_vertex>
					varying vec3 vNormal;
					varying vec3 vWorld;
					void main() {
						vNormal = normal;
						vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
						gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
						#include <logdepthbuf_vertex>
					}
				`,fragmentShader:`
					#include <common>
					#include <logdepthbuf_pars_fragment>
					uniform vec3 uColour;
					uniform float uAlpha;
					uniform float uKeep;
					varying vec3 vNormal;
					varying vec3 vWorld;
					const float LIMB_MAX = 12.0;
					void main() {
						#include <logdepthbuf_fragment>
						// A grazing line of sight runs through more of the layer.
						vec3 toEye = normalize(cameraPosition - vWorld);
						float facing = abs(dot(normalize(vNormal), toEye));
						float limb = min(1.0 / max(facing, 1.0 / LIMB_MAX), LIMB_MAX);
						float keep = min(uKeep * sqrt(limb), 1.0);
						float b[16] = float[16](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
						ivec2 cell = ivec2(floor(gl_FragCoord.xy / 2.0)) & ivec2(3, 3);
						if (keep <= (b[cell.y * 4 + cell.x] + 0.5) / 16.0) discard;
						gl_FragColor = vec4(uColour, min(uAlpha * limb, 1.0));
						#include <colorspace_fragment>
					}
				`}));let t=this.shape(!1);this.colour=new Float32Array(t.attributes.position.count*4),t.setAttribute(`color`,new k(this.colour,4).setUsage(S)),this.dome=new j(t,new m({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,toneMapped:!1})),this.dome.renderOrder=-8,this.dome.frustumCulled=!1,this.group.add(this.shell,this.dome)}inside(e){let t=this.radius;return e.y>0&&(e.x*e.x+e.z*e.z)/(t*t)+(e.y/2e4)**2<1}update(e,t,n,r){let i=this.inside(e);if(this.shell.visible=!i,!i){let e=Et.clone().lerp(Tt,H(n)),t=this.shell.material.uniforms;t.uColour.value.setRGB(e.x,e.y,e.z,u),t.uAlpha.value=e.w*Dt*Ot,t.uKeep.value=kt+.15000000000000002*H(n)}if(this.dome.visible=i&&Pt(new o(0,1,0),t,0)[1]>0,!this.dome.visible)return;let a=this.coloured;if(a&&a.eye.distanceTo(e)<At&&a.sun.dot(t)>jt&&Math.abs(a.eclipse-r)<.01)return;this.coloured={eye:e.clone(),sun:t.clone(),eclipse:r};let s=this.dome.geometry.attributes.position,c=new o,l=new D;for(let n=0;n<s.count;n++){c.fromBufferAttribute(s,n).sub(e).normalize();let[i,a]=Pt(c,t,r);l.setRGB(i.x,i.y,i.z,u),this.colour.set([l.r,l.g,l.b,a],n*4)}this.dome.geometry.attributes.color.needsUpdate=!0}shape(e){let t=this.radius,n=[],r=[];for(let e=0;e<=_t;e++){let i=Math.PI/2*(e/_t)**1.5,a=t*Math.cos(i),s=gt*Math.sin(i);for(let e=0;e<=vt;e++){let i=Math.PI*2*e/vt,[c,l]=[a*Math.cos(i),a*Math.sin(i)];n.push(c,s,l);let u=new o(c/(t*t),s/(gt*gt),l/(t*t));u.lengthSq()===0&&u.set(0,1,0),u.normalize(),r.push(u.x,u.y,u.z)}}let i=[];for(let e=0;e<_t;e++)for(let t=0;t<vt;t++){let n=e*65+t,r=(e+1)*65+t;i.push(n,r,n+1,n+1,r,r+1)}let a=new T;return a.setAttribute(`position`,new C(n,3)),e&&a.setAttribute(`normal`,new C(r,3)),a.setIndex(i),a}};function Pt(e,t,n){let[r,i]=Ft(e,t),a=Mt(.6,1,n);if(a<=0)return[r,i];let o=1-H(Math.max(e.y,0)/.3),s=a*o*o,c=wt.clone().lerp(Ct,1-o).lerp(St,.5*(1-o)),l=1-.9*H(n)**4;return[r.lerp(c,s),Math.max(i*l,i*s)]}function Ft(e,t){let n=Math.max(e.y,0),r=t.y,i=yt.clone().lerp(bt,Math.sqrt(H(n/.6))),a=xt+-.030000000000000027*H(n/.8),o=e=>{let t=Math.hypot(e.x,e.z);return t>0?[e.x/t,e.z/t]:[0,0]},[s,c]=o(e),[l,u]=o(t),d=(s*l+c*u+1)/2,f=1-H(n/.45),p=d**3*f,m=St.clone().lerp(Ct,f*(.35+.65*d)).lerp(wt,p),h=.6+.35*Math.max(f*d,p),g=Mt(0,.22,r),_=Mt(-.22,-.02,r);return[m.lerp(i,g),(h+(a-h)*g)*_]}var It=2e4,Lt=.9,Rt=700,zt=1500,Bt=6,Vt=8,Ht=.7,Ut=.02,Wt=32,Gt=600,Kt=20,qt=64,Jt=class{radius;mesh;constructor(e){this.radius=e,this.mesh=new j(Yt(e),new a({uniforms:{uRings:{value:Array.from({length:Wt},()=>new g)},uShape:{value:new g(e,Rt,zt,Bt)}},blending:2,transparent:!0,depthWrite:!1,side:2,vertexShader:`
					#include <common>
					#include <logdepthbuf_pars_vertex>
					varying vec2 vXZ;
					void main() {
						vXZ = (modelMatrix * vec4(position, 1.0)).xz;
						gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
						#include <logdepthbuf_vertex>
					}
				`,fragmentShader:`
					#include <common>
					#include <logdepthbuf_pars_fragment>
					uniform vec4 uRings[32];
					uniform vec4 uShape;
					varying vec2 vXZ;
					const float GLOW = 0.45;
					const float BOOST = 2.0;
					const float CREST = 0.75;
					const float FILL = 0.05;
					vec3 rainbow(float h) {
						int i = clamp(int(h * 6.0), 0, 5);
						if (i == 0) return vec3(1.0, 0.08, 0.05);
						if (i == 1) return vec3(1.0, 0.45, 0.0);
						if (i == 2) return vec3(1.0, 0.92, 0.08);
						if (i == 3) return vec3(0.1, 0.85, 0.15);
						if (i == 4) return vec3(0.12, 0.3, 1.0);
						return vec3(0.55, 0.12, 1.0);
					}
					void main() {
						#include <logdepthbuf_fragment>
						float lambda = uShape.z;
						float tail = lambda * uShape.w;
						vec3 colour = vec3(0.0);
						for (int k = 0; k < 32; k++) {
							vec4 r = uRings[k];
							if (r.w <= 0.0) break;
							float behind = r.z - distance(vXZ, r.xy);
							float u = fract(behind / lambda) / CREST;
							if (behind <= 0.0 || behind >= tail || u >= 1.0) continue;
							float packet = smoothstep(0.0, lambda, behind) * (1.0 - behind / tail);
							float crest = FILL * min(1.0, 3.0 * sin(PI * u));
							colour += r.w * crest * packet * rainbow(u);
						}
						colour *= BOOST;
						float strength = max(colour.r, max(colour.g, colour.b));
						float b[16] = float[16](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
						ivec2 cell = ivec2(floor(gl_FragCoord.xy / 2.0)) & ivec2(3, 3);
						if (strength <= (b[cell.y * 4 + cell.x] + 0.5) / 16.0) discard;
						gl_FragColor = vec4(colour / strength * GLOW, 1.0);
						#include <colorspace_fragment>
					}
				`})),this.mesh.visible=!1}update(e,t){let n=(1-Math.min(1,Math.max(0,t)))**2,r=e.filter(e=>e.age>=0&&e.age<Gt).map(e=>({w:e,bright:e.strength*n*Math.min(1,Math.max(0,1-e.age/Gt))})).filter(e=>e.bright>.005).sort((e,t)=>t.bright-e.bright).slice(0,Vt);if(this.mesh.visible=r.length>0,!this.mesh.visible)return;let i=this.radius,a=2*i,o=zt*Bt,s=[];for(let{w:e,bright:t}of r){let n=Rt*e.age,r=t/Math.sqrt(1+n/i),c=Math.ceil((n+i)/a)+1,l=(e,t)=>e*a+(e%2==0?t:-t);for(let t=-c;t<=c;t++)for(let a=-c;a<=c;a++){let c=r*Ht**(Math.abs(t)+Math.abs(a)),u=l(t,e.x),d=l(a,e.z),f=Math.hypot(u,d);c>=Ut&&n>f-i&&n-o<f+i&&s.push([u,d,n,c])}}s.sort((e,t)=>t[3]-e[3]),this.mesh.material.uniforms.uRings.value.forEach((e,t)=>t<s.length?e.set(...s[t]):e.set(0,0,0,0))}};function Yt(e){let t=[];for(let n=0;n<=Kt;n++){let r=Math.PI/2*(n/Kt)**1.5,i=e*Math.cos(r),a=It*Math.sin(r)*Lt;for(let e=0;e<=qt;e++){let n=Math.PI*2*e/qt;t.push(i*Math.cos(n),a,i*Math.sin(n))}}let n=[];for(let e=0;e<Kt;e++)for(let t=0;t<qt;t++){let r=e*65+t,i=(e+1)*65+t;n.push(r,i,r+1,r+1,i,i+1)}let r=new T;return r.setAttribute(`position`,new C(t,3)),r.setIndex(n),r}var U=40,Xt=.9,Zt=10,Qt=.06,$t=5,en=7,tn=4.4,nn=12,rn=2.4,W=Math.PI*2,an=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],on=(1n<<64n)-1n;function G(e,t){let n=BigInt(e>>>0)<<32n|BigInt(t>>>0);return n^=n>>33n,n=n*18397679294719823053n&on,n^=n>>33n,n=n*14181476777654086739n&on,n^=n>>33n,Number(n>>40n)/2**24}var sn=Array.from({length:U},(e,t)=>[G(t,9),G(t,10),G(t,11)]),cn=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function ln(e,t){let n=14+10*G(e,0),r=t+G(e,1)*n,i=Math.floor(r/n),a=r-i*n,o=Math.imul(i>>>0,7)>>>0,s=W*G(e,o+2),c=.25+.35*G(e,o+3),l=Math.min(1,a/$t);return[s,c,(.35+1.25*G(e,o+4)**1.5)*l*(1.5-.5*l),a>=12?0:1-Math.min(1,Math.max(0,(a-$t)/en))]}function un(e,t){let n=((e-t)%W+W)%W;return n>Math.PI?n-W:n}var K=[0,0,0,0];function dn(e,t,n,r,i,a){let o=(n+r)%2==0,s=n%2==0&&r%2==0,c=e-1;for(let[i,s,l,u]of a){if(l<=0||u<=0)continue;let a=un(-t,i)*e,d=Math.sqrt((a/s)**2+(c/l)**2),f=Math.hypot(a/(s*s),c/(l*l))/Math.max(d,.001);if(Math.abs(d-1)/Math.max(f,.001)<Qt){if(u<=(an[r%4*4+n%4]+.5)/16)continue;if(c/l<.5)return[255,204,72,255];if(o)return[250,176,64,210]}}let l=W/U,u=Math.round(t/l),[d,f,p]=sn[(u%U+U)%U],m=c/(Xt*(.15+.85*Math.abs(Math.sin(i*(.25+.33*d)+W*f))*p**2)),h=59/tn,g=Math.abs(Math.sin(t-u*l))*e*h;return!(m>=0&&m<1)||g>Math.max((1-m)*.4*l*h,.55)?K:m<.4?[255,214,80,255]:m<.75&&o?[255,182,60,220]:s?[245,150,56,170]:K}function fn(e,t,n,r,i){if(Math.hypot(e,t)<1.05)return K;let a=(n+r)%2==0,o=n%2==0&&r%2==0,[s,c]=[Math.cos(i.angle),-Math.sin(i.angle)],l=(.1+.75*(1-(1-i.age)**2))*(1+Math.min(1,Math.max(0,i.strength))**2),[u,d]=[s*(1+.8*l),c*(1+.8*l)],f=Math.hypot(e-u,t-d),p=cn(.6,1,i.age),m=.07+.07*i.strength,h=Math.hypot(e-s*(1+.9*l),t-c*(1+.9*l)),g=(e-u)*s+(t-d)*c>-.4*l;if(f<l&&f>l-m&&g){if(p<.3||p<.8&&a||p<.95&&o)return[255,236,180,255]}else if(h<.3*l){if(p<.5&&a||p<.9&&o)return[255,150,90,230]}else if(f<l&&o&&p<.6)return[255,200,150,120];return K}var pn=[rn,1.6,1.9,1.5,2.1,1.6,rn,1.7,1.5,2,1.6,1.8];function mn(e,t,n){if(e<1)return 0;let r=W/nn,i=Math.round((t+.3)/r),a=Math.abs(Math.sin(t+.3-i*r))*e,o=pn[(i%nn+nn)%nn],s=Math.min(1,Math.max(0,(e-1)/(o-1))),c=.3+.2*(1-s);return e>=o||a>c?0:s<.3?200:s<.65&&n?170:s>=.65&&n?110:0}function hn(e,t,n){if(n<=0)return 0;let r=Math.hypot(e,t),i=r<.42?1:Math.min(Math.abs(e),Math.abs(t))<.08&&r<1.1?1-(r-.42)/.68:0;return Math.floor(255*i*n)}function gn(e){let t=(t,n)=>cn(t,n,e.cover),n=e.diamond[0]===0&&e.diamond[1]===0?0:t(.9,.985)*(1-t(.995,1));return[t(.975,1),n]}function _n(e,t,n,r){let i=59/tn,[a,o]=gn(t),s=Array.from({length:Zt},(t,n)=>ln(n,e));for(let c=0;c<118;c++)for(let l=0;l<118;l++){let u=l+.5-59,d=c+.5-59,f=Math.hypot(u,d)/i,p=(l+c)%2==0,m=hn(u/i-t.diamond[0],d/i-t.diamond[1],o),h;if(m>0)h=[255,255,250,m];else if(f<.45)h=[255,253,236,255];else if(f<.72)h=[255,238,160,255];else if(f<.9)h=[255,214,92,255];else if(f<1)h=[250,170,56,255];else{let t=K;for(let e of n){let n=fn(u/i,d/i,l,c,e);if(n[3]>0){t=n;break}}let r=Math.atan2(d,u),o=t[3]>0?K:dn(f,r,l,c,e,s),m=mn(f,r,p);h=t[3]>0?t:o[3]>0?o:f<1.12&&p?[255,196,80,150]:m>0&&a>0?[240,236,220,Math.floor(m*a)]:K}r.set(h,(c*118+l)*4)}}var q={uDay:{value:1},uNight:{value:new D(0,0,0)},uEclipse:{value:[new g,new g]},uDark:{value:[0,0]}},vn=`
	uniform float uDay;
	uniform vec3 uNight;
	uniform vec4 uEclipse[2];
	uniform float uDark[2];
	vec3 landLight(vec2 p) {
		float shade = 0.0;
		for (int k = 0; k < 2; k++) {
			float d = distance(p, uEclipse[k].xy);
			float t = clamp((d - uEclipse[k].z) / max(uEclipse[k].w - uEclipse[k].z, 1.0), 0.0, 1.0);
			shade = max(shade, uDark[k] * (1.0 - t * t * (3.0 - 2.0 * t)));
		}
		return mix(uNight, vec3(1.0), uDay * (1.0 - shade));
	}
`,yn=new D(.07,.085,.16),bn=[new D(.78,.86,1),new D(1,.78,.5)],xn=.1,Sn=[new D(.86,.9,1),new D(1,.82,.58)],Cn=class{sky;skybox;group=new O;sun;sunCanvas;sunImage;sunTexture;sunKey=``;moons;sunLight;fill;comet=new Be;meteors;ring;aurora;air;waves;q=new d;v=new o;constructor(e,t,n,r){this.sky=t,this.skybox=r;let i=e.sunRadius;this.sunCanvas=document.createElement(`canvas`),this.sunCanvas.width=this.sunCanvas.height=118,this.sunImage=new ImageData(118,118),this.sunTexture=wn(this.sunCanvas),this.sun=new c(new p({map:this.sunTexture,transparent:!0,depthWrite:!1,toneMapped:!1})),this.sun.scale.setScalar(2*i*tn),this.group.add(this.sun),this.moons=[0,1].map(e=>{let t=wn(Tn(e)),n=new m({map:t}),r=new m({map:t}),i=new m({color:4867136}),a=new j(new x(1,1,.12,48),[i,n,r]);return this.group.add(a),{mesh:a,near:n,far:r}}),this.group.add(r.group),this.sunLight=new se(16773590,1.8),this.fill=new re(14214399,2760752,1.2),this.group.add(this.sunLight,this.fill),this.meteors=new Ye(t),this.ring=new nt(e.ring),this.aurora=new pt(n),this.air=new Nt(n),this.waves=new Jt(n),this.group.add(this.air.group,this.waves.mesh,this.ring.mesh,this.comet.group,this.meteors.mesh,this.aurora.mesh)}update(e,t){let n=t.position;this.sun.position.set(...e.sun);let r=this.drawSun(e,t);this.air.update(n,this.v.set(...e.sun).normalize().clone(),e.sunLight,r),this.sunLight.position.copy(this.sun.position).normalize(),this.fill.intensity=.25+1*e.sunLight,e.moons.forEach((e,t)=>{let{mesh:n,near:r,far:i}=this.moons[t];n.position.set(...e.pos),n.scale.setScalar(e.radius),this.v.set(-e.pos[0],-e.pos[1],-e.pos[2]).normalize(),n.quaternion.copy(this.q.setFromUnitVectors(ce.DEFAULT_UP,this.v)),r.color.copy(Sn[t]).multiplyScalar(.1+.9*e.near),i.color.copy(Sn[t]).multiplyScalar(.1+.9*e.far)});let i=(((e.year*4+e.season)*4+e.week)*4+e.day+e.hour/24)/64,a=this.air.inside(n);this.skybox.update(n,i%1,1,e.magnetar,e.bursts),this.waves.update(e.waves,e.sunLight),this.comet.update(e,n),this.meteors.update(e,n),this.ring.update(e,a),this.aurora.update(e),q.uDay.value=e.sunLight;let o=q.uNight.value.copy(yn);e.moons.forEach((e,t)=>o.add(bn[t].clone().multiplyScalar(xn*e.light))),o.add(new D(.85,.92,1).multiplyScalar(xn*e.burstGlow)),e.eclipses.forEach((e,t)=>{q.uEclipse.value[t].set(e.x,e.z,e.core,e.reach),q.uDark.value[t]=e.dark})}drawSun(e,t){let n=t.position,r=this.sky.cover(e.time,[n.x,n.y,n.z]),i={cover:r.frac,diamond:[0,0]};if(r.frac>0){let a=new o(...e.sun).sub(n).normalize(),s=new o(...e.moons[r.moon].pos).sub(n).normalize(),c=s.addScaledVector(a,-s.dot(a)),l=new o(1,0,0).applyQuaternion(t.quaternion),u=new o(0,1,0).applyQuaternion(t.quaternion),d=c.dot(l)/r.sunLooks,f=-c.dot(u)/r.sunLooks,p=Math.hypot(d,f);p>1e-4&&(i.diamond=[-d/p,-f/p])}let a=Math.floor(performance.now()/1e3*6),s=e.leaving.map(e=>({...e,age:Math.round(e.age*60)/60})),c=[a,Math.round(i.cover*100),Math.round(i.diamond[0]*24),Math.round(i.diamond[1]*24),...s.map(e=>e.age)].join();return c===this.sunKey||(this.sunKey=c,_n(a/6,i,s,this.sunImage.data),this.sunCanvas.getContext(`2d`).putImageData(this.sunImage,0,0),this.sunTexture.needsUpdate=!0),r.frac}};function wn(e){let t=new y(e);return t.colorSpace=u,t.magFilter=n,t.minFilter=n,t.generateMipmaps=!1,t}function Tn(e){let t=document.createElement(`canvas`);t.width=t.height=32;let n=t.getContext(`2d`),r=e===0?7:19,i=()=>(r=r*16807%2147483647,r/2147483647);n.fillStyle=`#d8d8d8`,n.fillRect(0,0,32,32);for(let e=0;e<5;e++){let e=6+i()*20,t=6+i()*20,r=3+i()*5;for(let i=0;i<32;i++)for(let a=0;a<32;a++)Math.hypot(a-e,(i-t)*1.2)<r+Math.sin(a*1.7+i)*.8&&(n.fillStyle=`#a4a4a8`,n.fillRect(a,i,1,1))}for(let e=0;e<9;e++){let e=Math.floor(3+i()*26),t=Math.floor(3+i()*26),r=1+Math.floor(i()*2.5);n.fillStyle=`#86868c`,n.beginPath(),n.arc(e,t,r,0,Math.PI*2),n.fill(),n.fillStyle=`#f0f0f0`,n.fillRect(e+r-1,t-r,1,1)}return t}var En=0,Dn=5,On=19,kn=25,An=35,jn=42,Mn=43,Nn=45,Pn=53,Fn=66,In=67,Ln=68,Rn=97,zn=130,Bn=10;async function Vn(e,t){let n=await fetch(e).then(e=>e.arrayBuffer()),{instance:r}=await WebAssembly.instantiate(n,{}),i=r.exports;return i.set_disc_scale(t),{daySecs:i.day_secs(),festivalDay:i.festival_day(),at(e){let t=i.sky(e),n=new Float32Array(i.memory.buffer,t,zn),r=e=>{let t=Dn+e*7;return{pos:[n[t],n[t+1],n[t+2]],near:n[t+3],far:n[t+4],radius:n[t+5],light:n[t+6]}},a=e=>{let t=kn+e*5;return{x:n[t],z:n[t+1],core:n[t+2],reach:n[t+3],dark:n[t+4]}},o=e=>[n[e],n[e+1],n[e+2]];return{time:e,sun:[n[En],n[1],n[2]],sunLight:n[3],sunRadius:n[4],moons:[r(0),r(1)],year:n[On],season:n[20],week:n[21],day:n[22],hour:n[23],daylight:n[24],eclipses:[a(0),a(1)],comet:{pos:o(An),glow:n[38],tail:o(39)},aurora:n[jn],shower:n[Mn],ringShower:n[44],ring:{axis:o(Nn),touch:o(48),radius:n[51],width:n[52]},leaving:Array.from({length:n[Pn]},(e,t)=>{let r=54+t*3;return{angle:n[r],age:n[r+1],strength:n[r+2]}}),magnetar:n[Fn],burstGlow:n[In],bursts:Array.from({length:n[Ln]},(e,t)=>{let r=69+t*7;return{supernova:n[r]>.5,phase:n[r+1],light:n[r+2],at:o(r+3),turn:n[r+6]}}),waves:Array.from({length:n[Rn]},(e,t)=>{let r=98+t*4;return{x:n[r],z:n[r+1],strength:n[r+2],age:n[r+3]}})}},loadWeather(e){let t=i.alloc(e.byteLength);return new Uint8Array(i.memory.buffer,t,e.byteLength).set(new Uint8Array(e)),i.weather_load(t,e.byteLength)===1},weather(e){let t=i.weather_at(e),n=i.weather_len();if(n<2)return null;let r=new Float32Array(i.memory.buffer,t,n);return{n:r[0],cell:r[1],cells:r.slice(2)}},cover(e,t){let n=i.cover(e,t[0],t[1],t[2]),r=new Float32Array(i.memory.buffer,n,3);return{frac:r[0],sunLooks:r[1],moon:r[2]}},meteors(e,t){let n=i.meteors(e,t),r=i.meteor_count(),a=new Float32Array(i.memory.buffer,n,r*Bn);return Array.from({length:r},(t,n)=>{let r=n*Bn;return{start:e+a[r],from:[a[r+1],a[r+2],a[r+3]],velocity:[a[r+4],a[r+5],a[r+6]],burn:a[r+7],fade:a[r+8],fireball:a[r+9]>.5}})}}}var Hn=3e3,Un=80,J=2e3,Wn=60,Gn=.5,Kn=4,qn=.97,Y=`
	uniform sampler2D uAir;
	uniform sampler2D uStorms;
	uniform vec2 uDrift;
	uniform float uLayer;
	uniform float uFade;
	uniform float uHalf;
	uniform float uTime;
	uniform float uMoons;
	uniform float uRim;
	uniform float uPix;
	uniform vec3 uSun;
	const float EDGE = 0.55;

	uint mix32(uint x) {
		uint h = x;
		h = h ^ (h >> 15u);
		h = h * 0x2c1b3c6du;
		h = h ^ (h >> 12u);
		h = h * 0x297a2d39u;
		h = h ^ (h >> 15u);
		return h;
	}
	uint cellHash(ivec2 p) {
		return mix32((uint(p.x) * 0x8da6b343u) ^ (uint(p.y) * 0xd8163841u));
	}
	float hash2(ivec2 p) {
		return float(cellHash(p) & 0xffffffu) / 16777216.0;
	}
	float noise(vec2 p) {
		ivec2 i = ivec2(floor(p));
		vec2 f = fract(p);
		vec2 u = f * f * (3.0 - 2.0 * f);
		float a = hash2(i);
		float b = hash2(i + ivec2(1, 0));
		float c = hash2(i + ivec2(0, 1));
		float d = hash2(i + ivec2(1, 1));
		return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
	}
	// Billowy noise about 0.5, a few km across.
	float fbm(vec2 p) {
		float sum = 0.0;
		float amp = 0.5;
		vec2 q = p;
		for (int k = 0; k < 4; k++) {
			sum += amp * noise(q);
			q = q * 2.03 + vec2(17.1, -9.4);
			amp *= 0.5;
		}
		return sum / 0.9375;
	}
	vec2 gridUv(vec2 p) {
		return (p + uHalf) / (2.0 * uHalf);
	}
	vec4 airAt(vec2 p) {
		return texture2D(uAir, gridUv(p));
	}
	vec4 stormsAt(vec2 p) {
		return texture2D(uStorms, gridUv(p));
	}
	// How much cloud at p: over EDGE is cloud.
	float density(vec2 p) {
		float n = fbm((p - uDrift) / 2800.0);
		return airAt(p).x * 1.05 + (n - 0.5);
	}
	// A 4 by 4 ordered dither, 0 to 1.
	float bayer(ivec2 i) {
		float m[16] = float[16](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
		int x = ((i.x % 4) + 4) % 4;
		int y = ((i.y % 4) + 4) % 4;
		return (m[y * 4 + x] + 0.5) / 16.0;
	}
	// Toward the sun from (p, y): it is a near orb, so this leans
	// differently across the disc.
	vec3 towardSun(vec2 p, float y) {
		return normalize(uSun - vec3(p.x, y, p.y));
	}
	float dayAt(vec3 up) {
		return smoothstep(-0.03, 0.1, up.y);
	}
	// Day, a little at night so the weather still reads, bluish under the moons.
	vec3 light(vec3 up) {
		vec3 night = vec3(0.16, 0.18, 0.27) * (1.0 + 0.6 * uMoons);
		return mix(night, vec3(1.0), dayAt(up));
	}
`,Jn=`
	#include <common>
	#include <logdepthbuf_pars_fragment>
	${Y}
	uniform sampler2D uLying;
	uniform float uSheet;
	varying vec3 vWorld;

	vec4 clouds(vec2 p, ivec2 cell) {
		float d = density(p);
		float t = uTime;
		vec4 s = stormsAt(p);
		// Thin edges dither out.
		if ((d - EDGE) / 0.035 < bayer(cell)) discard;
		// The density as a height: slopes facing the sun lit, the far
		// sides shaded, in a few flat tones.
		vec3 up = towardSun(p, uLayer);
		vec2 sun = normalize(up.xz + vec2(1e-4, 0.0));
		float slope = density(p + sun * uPix * 4.0) - d;
		int tone = 1;
		if (slope < -0.03) tone = 0;
		else if (slope > 0.09) tone = 3;
		else if (slope > 0.035) tone = 2;
		vec4 a = airAt(p);
		// Rain and storm clouds are darker, in steps.
		float dark = floor(clamp(s.x * 1.2 + a.y * 1.2 + (d - EDGE - 0.4), 0.0, 1.0) * 3.0 + 0.5) / 3.0;
		vec3 tones[4] = vec3[4](vec3(1.0), vec3(0.88, 0.9, 0.95), vec3(0.74, 0.77, 0.87), vec3(0.6, 0.63, 0.76));
		vec3 c = tones[tone] * mix(1.0, 0.5, dark) * mix(vec3(1.0), vec3(0.92, 0.94, 1.08), dark);
		// Sunset warms the lit side.
		float low = 1.0 - smoothstep(0.05, 0.35, up.y);
		if (tone == 0) c = mix(c, c * vec3(1.0, 0.82, 0.66), 0.7 * low * dayAt(up));
		c *= light(up);
		// Seen from below, snow falls from them in winking flakes.
		if (cameraPosition.y < uLayer) {
			float snow = clamp(a.z * 2.0, 0.0, 1.0);
			if (snow > 0.02 && hash2(cell + ivec2(int(floor(t * 3.0)) * 131, 7)) < snow * 0.2) c = light(up) * 1.1;
		}
		// Lightning lights up a storm's clouds now and then, a patch at a time.
		ivec2 stormCell = ivec2(floor(p / 5000.0));
		int beat = int(floor(t * 5.0));
		vec2 flashAt = (vec2(stormCell) + 0.5) * 5000.0;
		float glow = 1.0 - distance(p, flashAt) / 2200.0;
		if (s.x > 0.2 && glow > bayer(cell) * 0.5 && hash2(stormCell * 7 + ivec2(beat, beat * 3)) < s.x * 0.06) {
			c = vec3(1.0, 1.0, 0.88) * 1.4;
		}
		return vec4(c, (d > EDGE + 0.2 ? 0.93 : 0.82) * uFade);
	}

	vec4 sheet(vec2 p, float y, ivec2 cell) {
		float t = uTime;
		vec4 a = airAt(p);
		vec3 c = vec3(0.0);
		float alpha = 0.0;
		vec3 sun = towardSun(p, y);
		// Snow lying, in patches with dithered edges as it comes and goes.
		float snowed = texture2D(uLying, gridUv(p)).x;
		float patchy = fbm(p / 900.0 + vec2(31.0, 7.0));
		bool white = false;
		if (snowed > 0.05 && snowed > 0.15 + 0.8 * patchy + (bayer(cell) - 0.5) * 0.1) {
			c = vec3(0.92, 0.94, 0.98) * light(sun);
			alpha = 0.88;
			white = true;
		}
		// Shadows, cast toward the sun from the cloud layer.
		if (sun.y > 0.05) {
			vec2 back = p + sun.xz / sun.y * (uLayer - y);
			if (density(back) > EDGE) {
				if (white) c *= 1.0 - 0.3 * dayAt(sun);
				else alpha = 0.3 * dayAt(sun);
			}
		}
		// Fog lies in pale patches with dithered edges.
		float fog = a.w * 1.1 + (fbm(p / 1800.0 + vec2(t * 0.01, 0.0)) - 0.5) * 0.7;
		if (fog > 0.45 + bayer(cell) * 0.12) {
			c = vec3(0.86, 0.88, 0.9) * light(sun);
			alpha = max(alpha, 0.6);
		}
		// Snow: flakes winking on and off.
		float snow = clamp(a.z * 2.0, 0.0, 1.0);
		if (snow > 0.02 && hash2(cell + ivec2(int(floor(t * 3.0)) * 131, 7)) < snow * 0.18) {
			c = light(sun);
			alpha = 0.9;
		}
		if (alpha <= 0.0) discard;
		return vec4(c, alpha * uFade);
	}

	void main() {
		#include <logdepthbuf_fragment>
		ivec2 cell = ivec2(floor(vWorld.xz / uPix));
		vec2 p = (vec2(cell) + 0.5) * uPix;
		if (length(p) > uRim) discard;
		if (uSheet < 0.5) {
			// Seen edge on toward the horizon the layer fades out, rather
			// than crowd into streaks.
			vec3 ray = normalize(vWorld - cameraPosition);
			vec4 c = clouds(p, cell);
			gl_FragColor = vec4(c.rgb, c.a * smoothstep(0.03, 0.15, abs(ray.y)));
		} else {
			gl_FragColor = sheet(p, vWorld.y, cell);
		}
		#include <colorspace_fragment>
	}
`,Yn=`
	#include <common>
	#include <logdepthbuf_pars_vertex>
	varying vec3 vWorld;
	void main() {
		vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
		// (as the sheet itself works it out, so the weather on it lies at
		// the very same depth)
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
		#include <logdepthbuf_vertex>
	}
`,Xn=`
	#include <common>
	#include <logdepthbuf_pars_vertex>
	${Y}
	uniform vec3 uSlots;
	varying vec2 vLocal;
	varying vec2 vSize;
	varying vec2 vCentre;
	varying vec3 vAcross;
	flat varying uint vSeed;
	// Only cloud this much over the edge stands up.
	const float STANDS = 0.05;
	// The quad reaches this share of the cloud's height under its base.
	const float BELOW = 0.15;
	float rnd(uint seed, uint k) {
		return float(mix32(seed ^ (k * 0x85ebca6bu)) & 0xffffu) / 65535.0;
	}
	void main() {
		float slot = uSlots.x;
		ivec2 cell = ivec2(position.xy + uSlots.yz);
		uint h = cellHash(cell);
		vec2 jitter = vec2(float((h >> 16u) & 255u), float((h >> 24u) & 255u)) / 256.0 - 0.5;
		vec2 centre = (vec2(cell) + 0.5 + 0.5 * jitter) * slot + uDrift;
		float thick = (density(centre) - EDGE - STANDS) / 0.35;
		if (thick <= 0.0 || length(centre) > uRim) {
			gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
			return;
		}
		float t = min(thick, 1.0);
		float storm = stormsAt(centre).x;
		uint seed = mix32(h ^ 0x9e3779b9u);
		// Its own size, and how tall for its width by its shape.
		float size = 0.5 + 0.9 * rnd(seed, 1u);
		uint shape = seed % 4u;
		float aspect = 0.35 + 0.35 * t;
		if (shape == 1u) aspect *= 0.55;
		else if (shape == 2u) aspect *= 1.0 + 0.5 * rnd(seed, 2u);
		else if (shape == 3u) aspect *= 0.7;
		float w = slot * (0.45 + 0.6 * t) * size * (shape == 1u ? 1.4 : 1.0);
		float tall = w * aspect * (1.0 + 2.2 * storm * t);
		// Turned to the camera about the upright.
		vec2 to = centre - cameraPosition.xz;
		vec2 across = normalize(vec2(-to.y, to.x) + vec2(1e-3, 0.0));
		float base = uLayer - 100.0;
		float x = uv.x * w * 0.5;
		// A little below the base too, for the puffs with round bottoms.
		float y = mix(-BELOW, 1.0, uv.y) * tall;
		vec3 world = vec3(centre.x + across.x * x, base + y, centre.y + across.y * x);
		gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
		#include <logdepthbuf_vertex>
		vLocal = vec2(x, y);
		vSize = vec2(w, tall);
		vCentre = centre;
		vAcross = vec3(across, storm);
		vSeed = seed;
	}
`,Zn=`
	#include <common>
	#include <logdepthbuf_pars_fragment>
	${Y}
	varying vec2 vLocal;
	varying vec2 vSize;
	varying vec2 vCentre;
	varying vec3 vAcross;
	flat varying uint vSeed;
	float rnd(uint seed, uint k) {
		return float(mix32(seed ^ (k * 0x85ebca6bu)) & 0xffffu) / 65535.0;
	}
	void main() {
		#include <logdepthbuf_fragment>
		// In the map's pixels.
		vec2 lp = (floor(vLocal / uPix) + 0.5) * uPix;
		float half_ = vSize.x * 0.5;
		// Up in units of half the width, squashed so the heap's top is
		// the cloud's height.
		float stretch = vSize.y / (half_ * 0.9);
		vec2 q = vec2(lp.x / half_, lp.y / half_ / stretch);
		// A few puffs, how many, how big and where by the cloud's shape:
		// 0 a heap, 1 a long low bank, 2 a billow rising to one side,
		// 3 loose puffs at different heights.
		uint shape = vSeed % 4u;
		uint n = 3u + (vSeed >> 3u) % 5u;
		float lean = rnd(vSeed, 3u) > 0.5 ? 1.0 : -1.0;
		bool flat_ = shape != 3u && rnd(vSeed, 4u) < 0.7;
		float best = 2.0;
		vec3 normal = vec3(0.0, 0.0, 1.0);
		for (uint k = 0u; k < 8u; k++) {
			if (k >= n) break;
			float along = (float(k) + 0.5) / float(n) * 2.0 - 1.0;
			float cx = along * 0.72 + (rnd(vSeed, 10u + k) - 0.5) * 0.25;
			float r = 0.22 + 0.18 * rnd(vSeed, 20u + k);
			float cy = r * 0.7;
			if (shape == 0u) r *= 1.4 - 0.6 * abs(along);
			else if (shape == 1u) r *= 0.9;
			else if (shape == 2u) r *= 0.9 + 0.5 * (along * lean * 0.5 + 0.5);
			else cy = r * 0.3 + 0.45 * rnd(vSeed, 30u + k);
			cy += (k % 3u == 1u && shape != 1u) ? 0.25 * rnd(vSeed, 40u + k) : 0.0;
			// Kept inside the quad.
			r = min(r, min(1.0 - abs(cx), 0.9 - cy));
			if (r <= 0.02) continue;
			vec2 e = (q - vec2(cx, cy)) / r;
			float l = dot(e, e);
			if (l < best) {
				best = l;
				normal = vec3(e, sqrt(max(1.0 - l, 0.0)));
			}
		}
		if (best > 1.0 || (flat_ && q.y < 0.0)) discard;
		// Lit from the sun, in a few flat tones.
		vec3 across = vec3(vAcross.x, 0.0, vAcross.y);
		vec3 facing = vec3(-across.z, 0.0, across.x);
		vec3 toEye = dot(facing.xz, cameraPosition.xz - vCentre) > 0.0 ? facing : -facing;
		vec3 up = towardSun(vCentre, uLayer);
		vec3 sun = vec3(dot(up, across), up.y, dot(up, toEye));
		float lit = dot(normal, sun);
		// Shade, but light: no dark grey underside.
		vec3 c = vec3(0.84, 0.86, 0.92);
		if (lit > 0.45) c = vec3(1.0);
		else if (lit > 0.1) c = vec3(0.92, 0.93, 0.97);
		// Storm clouds are darker.
		c *= mix(vec3(1.0), vec3(0.5, 0.52, 0.6), floor(clamp(vAcross.z * 1.3, 0.0, 1.0) * 3.0 + 0.5) / 3.0);
		// Sunset warms the lit side.
		float low = 1.0 - smoothstep(0.05, 0.35, up.y);
		if (lit > 0.1) c = mix(c, c * vec3(1.0, 0.82, 0.66), 0.7 * low * dayAt(up));
		gl_FragColor = vec4(c * light(up), 1.0);
		#include <colorspace_fragment>
	}
`,Qn=`
	#include <common>
	#include <logdepthbuf_pars_vertex>
	${Y}
	uniform vec3 uSlots;
	varying vec2 vLocal;
	varying vec2 vSize;
	varying vec2 vCentre;
	varying vec2 vFall;
	flat varying uint vSeed;
	// Curtains this near the camera, m, fade away.
	const float NEAR = 750.0;
	void main() {
		float slot = uSlots.x;
		ivec2 cell = ivec2(position.xy + uSlots.yz);
		uint h = cellHash(cell + ivec2(7919, 104729));
		vec2 jitter = vec2(float((h >> 16u) & 255u), float((h >> 24u) & 255u)) / 256.0 - 0.5;
		vec2 centre = (vec2(cell) + 0.5 + 0.8 * jitter) * slot + uDrift;
		vec4 a = airAt(centre);
		float rain = clamp(a.y * 2.0, 0.0, 1.0);
		// Out of the cloud's middle, seen from far enough off.
		vec2 to = centre - cameraPosition.xz;
		float near = smoothstep(NEAR, NEAR * 2.0, length(to));
		if (rain < 0.02 || density(centre) < EDGE + 0.05 || near <= 0.0 || length(centre) > uRim) {
			gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
			return;
		}
		float w = slot * (0.35 + 0.45 * rain);
		float top = uLayer - 100.0;
		// Down from below the sea, so the ground cuts its foot.
		float base = -100.0;
		float tall = top - base;
		vec2 across = normalize(vec2(-to.y, to.x) + vec2(1e-3, 0.0));
		float x = uv.x * w * 0.5;
		float y = uv.y * tall;
		vec3 world = vec3(centre.x + across.x * x, base + y, centre.y + across.y * x);
		gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
		#include <logdepthbuf_vertex>
		vLocal = vec2(x, y);
		vSize = vec2(w, tall);
		vCentre = centre;
		vFall = vec2(rain, near);
		vSeed = h;
	}
`,$n=`
	#include <common>
	#include <logdepthbuf_pars_fragment>
	${Y}
	varying vec2 vLocal;
	varying vec2 vSize;
	varying vec2 vCentre;
	varying vec2 vFall;
	flat varying uint vSeed;
	void main() {
		#include <logdepthbuf_fragment>
		// In the map's pixels.
		ivec2 p = ivec2(floor(vLocal / uPix));
		float half_ = vSize.x * 0.5;
		// Ragged dithered sides, and a top that thins up into the cloud.
		float side = 1.0 - abs(vLocal.x) / half_;
		float rag = fbm(vec2(float(p.y) * 0.15, float(vSeed & 1023u)));
		float thin = min(side * 2.5 - 0.6 * rag, (vSize.y - vLocal.y) / (4.0 * uPix));
		float rain = vFall.x;
		if (thin < bayer(p) * 0.9 + 0.05 || vFall.y < bayer(p + ivec2(2, 1))) discard;
		vec3 up = towardSun(vCentre, 1000.0);
		int column = p.x + int(vSeed & 255u);
		// The map's rain streaks, falling straight down their columns.
		float drop = fract((float(p.y) + uTime * 9.0) / 7.0 + hash2(ivec2(column, 3)));
		if (hash2(ivec2(column, 1)) >= rain * 0.45 || drop >= 0.28) discard;
		gl_FragColor = vec4(vec3(0.32, 0.54, 1.0) * light(up), 0.7 * uFade);
		#include <colorspace_fragment>
	}
`;function er(e){let t=new Float32Array(e*e*4*3),n=new Float32Array(e*e*4*2),r=new Uint32Array(e*e*6),i=0;for(let a=0;a<e;a++)for(let o=0;o<e;o++)[[-1,0],[1,0],[1,1],[-1,1]].forEach(([e,r],s)=>{t.set([o,a,0],(i*4+s)*3),n.set([e,r],(i*4+s)*2)}),r.set([0,1,2,0,2,3].map(e=>i*4+e),i*6),i++;let a=new T;return a.setAttribute(`position`,new k(t,3)),a.setAttribute(`uv`,new k(n,2)),a.setIndex(new k(r,1)),a}function tr(){let e=new ne(new Uint8Array(4),1,1,te);return e.magFilter=v,e.minFilter=v,e.generateMipmaps=!1,e.needsUpdate=!0,e}var X=e=>Math.round(Math.min(1,Math.max(0,e))*255),nr=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},rr=class{group=new O;air=tr();storms=tr();lying=tr();uniforms;layer;sprites;curtains;slots;grid=null;constructor(e,t){this.slots=Math.floor(e/J)+3,this.uniforms={uAir:{value:this.air},uStorms:{value:this.storms},uLying:{value:this.lying},uDrift:{value:new _},uLayer:{value:Hn},uFade:{value:1},uHalf:{value:e/2},uTime:{value:0},uMoons:{value:0},uRim:{value:e/2*qn},uPix:{value:Un},uSun:{value:new o(0,1e6,0)},uSlots:{value:new o(J,0,0)}};let n=e=>new a({uniforms:{...this.uniforms,uSheet:{value:+!!e}},vertexShader:Yn,fragmentShader:Jn,transparent:!0,depthWrite:!e,side:2}),i=new r(e,e);i.rotateX(-Math.PI/2),this.layer=new j(i,n(!1)),this.layer.position.y=Hn;let s=new j(t,n(!0));s.renderOrder=-7,this.sprites=new j(er(this.slots),new a({uniforms:this.uniforms,vertexShader:Xn,fragmentShader:Zn,side:2})),this.curtains=new j(er(this.slots),new a({uniforms:this.uniforms,vertexShader:Qn,fragmentShader:$n,transparent:!0,depthWrite:!1,side:2})),this.curtains.renderOrder=-5;for(let e of[this.sprites,this.curtains,this.layer,s])e.frustumCulled=!1;this.group.add(s,this.curtains,this.layer,this.sprites),this.group.visible=!1}paint(e){if(!e)return;this.grid=e;let t=e.n,n=new Uint8Array(t*t*4),r=new Uint8Array(t*t*4),i=new Uint8Array(t*t*4),a=e=>X(e/160+.5);for(let o=0;o<t*t;o++){let[t,s,c,l,u,d,f,p,m]=e.cells.subarray(o*9,(o+1)*9);n.set([X(t*Gn),X(s/20),X(c/10),X(l)],o*4),r.set([X(u),X(d),a(f),a(p)],o*4),i[o*4]=X(nr(0,Kn,m))}for(let[e,a]of[[this.air,n],[this.storms,r],[this.lying,i]])e.image.width===t?e.image.data.set(a):(e.dispose(),e.image={data:a,width:t,height:t}),e.needsUpdate=!0;this.uniforms.uHalf.value=t*e.cell/2,this.group.visible=!0}update(e,t,n,r,i){let a=this.uniforms,o=this.grid;if(o){let n=Math.floor((t.x+a.uHalf.value)/o.cell),r=Math.floor((t.z+a.uHalf.value)/o.cell);if(n>=0&&r>=0&&n<o.n&&r<o.n){let t=(r*o.n+n)*9;a.uDrift.value.x+=o.cells[t+6]*Wn*e,a.uDrift.value.y+=o.cells[t+7]*Wn*e}}a.uTime.value=performance.now()/1e3%3600,a.uMoons.value=i,a.uSun.value.set(...r);let s=a.uDrift.value,c=Math.floor(this.slots/2);a.uSlots.value.set(J,Math.floor(-s.x/J)-c,Math.floor(-s.y/J)-c),this.layer.renderOrder=n.y<Hn?-6:-4}},ir=.97,ar=-400,or=1440,sr=200,cr=12,lr=new o(.42,.4,.52),ur=1.3,dr=[.4,.34,.29],fr=class{group=new O;uniforms={uToward:{value:new o(0,1,0)},uUnder:{value:0},uGlow:{value:lr},uTime:{value:0}};constructor(e,t,n,r,i){let a=e/2*ir;this.group.add(this.wall(e,t,n,a,i)),this.group.add(this.underside(r,a,i))}update(e){let t=this.uniforms.uToward.value.set(...e).normalize();this.uniforms.uUnder.value=ur*Math.min(1,Math.max(0,-t.y/.15)),this.uniforms.uTime.value=performance.now()/1e3%3600}wall(e,t,n,r,i){let o=t+1,s=e/t,c=e/2,l=(e,r)=>{let i=Math.min(t-.001,Math.max(0,(e+c)/s)),a=Math.min(t-.001,Math.max(0,(r+c)/s)),l=Math.floor(i),u=Math.floor(a),d=i-l,f=a-u,p=(e,t)=>n[t*o+e]/10,m=p(l,u)+(p(l+1,u)-p(l,u))*d;return m+(p(l,u+1)+(p(l+1,u+1)-p(l,u+1))*d-m)*f},u=[],d=[],f=[],p=[];for(let e=0;e<=or;e++){let t=Math.PI*2*e/or,[n,a]=[Math.cos(t),Math.sin(t)],o=Math.max(l(n*(r-s),a*(r-s)),l(n*(r-s/2),a*(r-s/2))),c=Math.max(o,0)*i,m=+(o<cr);if(u.push(n*r,c,a*r,n*r,ar*i,a*r),d.push(m,m),f.push(c,c),e<or){let t=e*2;p.push(t,t+1,t+2,t+2,t+1,t+3)}}let m=new T;m.setAttribute(`position`,new C(u,3)),m.setAttribute(`aSea`,new C(d,1)),m.setAttribute(`aTop`,new C(f,1)),m.setIndex(p);let h=new a({uniforms:{...q,...this.uniforms,uCurtain:{value:sr*i}},side:2,vertexShader:`
				#include <common>
				#include <logdepthbuf_pars_vertex>
				attribute float aSea;
				attribute float aTop;
				varying vec3 vWorld;
				varying float vSea;
				varying float vTop;
				void main() {
					vWorld = position;
					vSea = aSea;
					vTop = aTop;
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
					#include <logdepthbuf_vertex>
				}
			`,fragmentShader:`
				#include <common>
				#include <logdepthbuf_pars_fragment>
				${vn}
				uniform vec3 uToward;
				uniform float uUnder;
				uniform vec3 uGlow;
				uniform float uTime;
				uniform float uCurtain;
				varying vec3 vWorld;
				varying float vSea;
				varying float vTop;
				float hash(vec2 p) {
					return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
				}
				float bayer(vec2 c) {
					float m[16] = float[16](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
					ivec2 i = ivec2(mod(c, 4.0));
					return (m[i.y * 4 + i.x] + 0.5) / 16.0;
				}
				void main() {
					#include <logdepthbuf_fragment>
					// In pixels of 16 m round the rim and down it.
					float around = atan(vWorld.z, vWorld.x) * length(vWorld.xz);
					vec2 px = floor(vec2(around, vWorld.y) / 16.0);
					float down = vTop - vWorld.y;
					vec3 n = normalize(vec3(vWorld.x, 0.0, vWorld.z));
					// The sun on the face in steps, the void's glow always,
					// and the sun from under the disc at night.
					float facing = floor(max(dot(n, uToward), 0.0) * 4.0 + 0.5) / 4.0;
					vec3 lit = max(landLight(vWorld.xz) * (0.55 + 0.45 * facing), uGlow * 0.7 + uUnder * 0.5 * vec3(1.0, 0.92, 0.8));
					// The falls: water streaming down the curtain, breaking into
					// spray that thins out below.
					if (vSea > 0.5 && down < uCurtain * 2.0) {
						float column = hash(vec2(px.x, 1.0));
						float drop = fract((px.y + uTime * 3.0) / 6.0 + column);
						float spray = clamp((down - uCurtain) / uCurtain, 0.0, 1.0);
						if (down < uCurtain) {
							vec3 water = drop < 0.35 ? vec3(0.85, 0.93, 1.0) : vec3(0.27, 0.5, 0.78);
							gl_FragColor = vec4(water * lit, 1.0);
							#include <colorspace_fragment>
							return;
						}
						if (spray < bayer(px + vec2(0.0, floor(uTime * 4.0))) * 0.9 + 0.1 - 0.2 * drop) {
							gl_FragColor = vec4(vec3(0.82, 0.88, 0.95) * lit, 1.0);
							#include <colorspace_fragment>
							return;
						}
					}
					// The rock in rough strata, a grass lip at the top of dry land.
					float band = floor(vWorld.y / 48.0 + hash(vec2(floor(px.x / 6.0), 3.0)) * 0.8);
					float tone = hash(vec2(band, 7.0));
					vec3 rock = tone < 0.33 ? vec3(0.42, 0.35, 0.29) : tone < 0.66 ? vec3(0.36, 0.3, 0.26) : vec3(0.47, 0.41, 0.35);
					if (hash(px) < 0.12) rock *= 0.82;
					if (vSea < 0.5 && down < 16.0) rock = vec3(0.3, 0.42, 0.2);
					// Darker toward the void.
					rock *= 1.0 - 0.25 * clamp(down / 900.0, 0.0, 1.0);
					gl_FragColor = vec4(pow(rock, vec3(2.2)) * lit, 1.0);
					#include <colorspace_fragment>
				}
			`});return new j(m,h)}underside(e,t,n){let r=Math.round(Math.sqrt(e.length))-1,i=2*t/r,s=(a,s)=>{let c=-t+a*i,l=-t+s*i,u=Math.hypot(c,l);return u>t&&(c*=t/u,l*=t/u),new o(c,e[s*(r+1)+a]*n,l)},c=[];for(let e=0;e<=r;e++)for(let t=0;t<=r;t++)c.push(s(t,e));let l=(e,t)=>c[t*(r+1)+e],d=[],f=[],p=[],m=new o,h=new o,g=new D;for(let e=0;e<r;e++)for(let t=0;t<r;t++){let[r,i,a,o]=[l(t,e),l(t+1,e),l(t,e+1),l(t+1,e+1)];for(let e of[[r,i,a],[i,o,a]]){let t=m.subVectors(e[1],e[0]).cross(h.subVectors(e[2],e[0]));if(t.lengthSq()<1)continue;t.y>0&&([e[1],e[2]]=[e[2],e[1]],t.negate()),t.normalize();let r=(e[0].y+e[1].y+e[2].y)/3/n,i=Math.min(1,Math.max(0,(ar-r)/6e3));g.setRGB(...dr.map(e=>e*(1-.3*i)),u);for(let n of e)d.push(n.x,n.y,n.z),f.push(t.x,t.y,t.z),p.push(g.r,g.g,g.b)}}let _=new T;_.setAttribute(`position`,new C(d,3)),_.setAttribute(`normal`,new C(f,3)),_.setAttribute(`color`,new C(p,3));let v=new a({uniforms:this.uniforms,vertexColors:!0,side:2,vertexShader:`
				#include <common>
				#include <logdepthbuf_pars_vertex>
				varying vec3 vColour;
				varying vec3 vNormal;
				void main() {
					vColour = color;
					vNormal = normal;
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
					#include <logdepthbuf_vertex>
				}
			`,fragmentShader:`
				#include <common>
				#include <logdepthbuf_pars_fragment>
				uniform vec3 uToward;
				uniform float uUnder;
				uniform vec3 uGlow;
				varying vec3 vColour;
				varying vec3 vNormal;
				void main() {
					#include <logdepthbuf_fragment>
					// Faces turned to the sun in steps, as the rest of the pixel art.
					float facing = max(dot(normalize(vNormal), uToward), 0.0);
					float stepped = floor(facing * 4.0 + 0.5) / 4.0;
					// The void's glow comes up from below, a little to one side,
					// so the faces read as rock even with no sun under the disc.
					float glow = max(dot(normalize(vNormal), normalize(vec3(0.4, -0.8, 0.45))), 0.0);
					glow = 0.45 + 0.55 * floor(glow * 4.0 + 0.5) / 4.0;
					vec3 lit = uGlow * glow + vec3(1.0, 0.92, 0.8) * uUnder * stepped;
					gl_FragColor = vec4(vColour * lit, 1.0);
					#include <colorspace_fragment>
				}
			`});return new j(_,v)}},pr=[[0,[.42,.44,1,.8]],[.7,[1,.36,.62,.66]],[1,[1,.6,.78,.22]]],mr=6,Z=[0,.35,.7,.82],hr=[8,32],gr=380;function _r(e){let t=0;for(let n=0;n<pr.length;n++)pr[n][0]<=e&&(t=n);t=Math.min(t,pr.length-2);let[[n,r],[i,a]]=[pr[t],pr[t+1]],o=Math.min(1,Math.max(0,(e-n)/(i-n)));return r.map((e,t)=>e+(a[t]-e)*o)}function vr(){let[e,t]=hr,r=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)},i=new Uint8Array(e*t*4);for(let n=0;n<t;n++)for(let t=0;t<e;t++){let a=[.74,.84,.92,1][Math.floor(r(t,Math.floor(n/6)+t*3)*4)%4],o=r(t+50,n),s=o>.95?1:o<.06?a*.78:a;i.set([s*255,s*255,s*255,255],(n*e+t)*4)}let a=new ne(i,e,t);return a.colorSpace=u,a.wrapS=a.wrapT=l,a.magFilter=a.minFilter=n,a.needsUpdate=!0,a}function yr(e,t){let n=[],r=[],i=[],a=new D,s=hr[1]*gr;e.forEach(([e,c,l,d,f,p,m,h,g],_)=>{let v=new o(e,c*t,l),y=new o(d,f,p).normalize(),b=new o(Math.abs(y.x)>.9?0:1,+(Math.abs(y.x)>.9),0).cross(y).normalize(),x=new o().crossVectors(y,b),S=Z.map(e=>{let t=h*(.9+.1*e/Z[3]);return Array.from({length:mr},(n,r)=>{let i=g+r/mr*Math.PI*2;return v.clone().addScaledVector(y,m*e).addScaledVector(b,Math.cos(i)*t).addScaledVector(x,Math.sin(i)*t)})}),C=v.clone().addScaledVector(y,m),w=(e,t,o,c)=>{e.forEach((e,l)=>{let[d,f,p,h]=_r(t[l]);a.setRGB(Math.min(1,d*c),Math.min(1,f*c),Math.min(1,p*c),u),n.push(e.x,e.y,e.z),r.push(a.r,a.g,a.b,h),i.push(o[l],m*t[l]/s)})};for(let e=0;e<mr;e++){let t=(e+1)%mr,n=[1.12,.95,.8][e%3],r=.37*(e+3*_),i=r+.5;for(let a=0;a<Z.length-1;a++){let[o,s]=[S[a],S[a+1]],[c,l]=[Z[a],Z[a+1]];w([o[e],s[e],s[t]],[c,l,l],[r,r,i],n),w([o[e],s[t],o[t]],[c,l,c],[r,i,i],n)}let a=S[Z.length-1],o=Z[3];w([a[e],C,a[t]],[o,1,o],[r,.5*(r+i),i],n*1.08)}});let c=new T;c.setAttribute(`position`,new C(n,3)),c.setAttribute(`color`,new C(r,4)),c.setAttribute(`uv`,new C(i,2));let l=new m({map:vr(),vertexColors:!0,transparent:!0,depthWrite:!1,side:2});return new j(c,l)}function br(e,t){return Math.min(0,...e.map(([,e,,,n,,r])=>e*t+n*r))}var xr=.18,Sr=.15,Q=1.5,Cr=6e4,wr=.25;async function Tr(e){let r=`/`.replace(/\/?$/,`/`)+`world/`,i,a,s,c,l,d,p,m,g;try{let e=new t,n=`/`.replace(/\/?$/,`/`);[i,a,s,c,p,g,m]=await Promise.all([fetch(r+`world.json`).then(e=>e.json()),fetch(r+`height.bin`).then(e=>e.arrayBuffer()).then(e=>new Int16Array(e)),e.loadAsync(r+`ground.png`),e.loadAsync(r+`sprites.png`),fetch(r+`weather.json`).then(e=>e.ok?e.arrayBuffer():null).catch(()=>null),fetch(r+`underside.bin`).then(e=>e.arrayBuffer()).then(e=>new Int16Array(e)),fetch(r+`crystal.json`).then(e=>e.ok?e.json():[]).catch(()=>[])]),[l,d]=await Promise.all([Vn(n+`sky.wasm`,i.diameter/81920),oe(n+`sky/`)])}catch(e){console.error(`The world map could not be loaded.`,e),document.getElementById(`title`)?.classList.add(`placed`);return}let _=new ie({canvas:e,antialias:!0,logarithmicDepthBuffer:!0});_.setPixelRatio(Math.min(window.devicePixelRatio,2));let v=new f;v.background=new D(723996);let y=new h(45,1,10,4e6),b=i.diameter/2;for(let e of[s,c])e.colorSpace=u,e.magFilter=n;s.anisotropy=_.capabilities.getMaxAnisotropy(),c.minFilter=n,c.generateMipmaps=!1;let x=Dr(i,a,s);v.add(x);let S=new fr(i.diameter,i.cells,a,g,Q);v.add(S.group),v.add(yr(m,Q));let C=new Cn(l.at(0),l,b*.97,d);v.add(C.group);let w=kr(l),ee=Or(i,c);v.add(ee.mesh);let T=new rr(i.diameter,x.geometry);p&&l.loadWeather(p)&&v.add(T.group);let E=new je(y,e);E.enableDamping=!0,E.enablePan=!1,E.mouseButtons={LEFT:A.ROTATE,MIDDLE:A.DOLLY,RIGHT:A.ROTATE},E.touches={ONE:M.ROTATE,TWO:M.DOLLY_ROTATE},E.minDistance=1200,E.maxDistance=45e4,E.minPolarAngle=0,E.maxPolarAngle=Math.PI,E.autoRotate=!0,E.autoRotateSpeed=.25,E.target.set(0,0,0);let te=0;for(let e of g)te=Math.min(te,e);let ne=E.minDistance,re=-Math.min(te*Q,br(m,Q))+2e3,O=1.3,k=new o(0,Math.cos(O),Math.sin(O)),ae=()=>{let e=le.degToRad(y.fov/2),t=Math.min(e,Math.atan(Math.tan(e)*y.aspect));y.position.copy(k).multiplyScalar(b*1.08/Math.sin(t))},se=!1;E.addEventListener(`start`,()=>{E.autoRotate=!1,se=!0});let ce=NaN,j=()=>{let e=E.getPolarAngle(),t=Math.min(1,Math.min(e,Math.PI-e)/O),n=Math.round(xr*t*t*1e3)/1e3;if(n===ce)return;ce=n;let r=window.innerWidth,i=window.innerHeight;y.setViewOffset(r,i,0,-n*i,r,i),y.updateProjectionMatrix()},ue=()=>{let e=window.innerWidth,t=window.innerHeight;_.setSize(e,t,!1),y.aspect=e/t,ce=NaN,j(),se||ae()};window.addEventListener(`resize`,ue),ue();let N=document.getElementById(`title`),de=[];for(let e=0;e<32;e++)for(let t=0;t<=8;t++){let n=e/32*Math.PI*2,r=t/8*(Math.PI/2),i=b*.97*Math.cos(r);de.push(new o(i*Math.cos(n),gt*Math.sin(r),i*Math.sin(n)))}let P=new o,fe=-1/0,pe=()=>{if(!N||N.classList.contains(`gone`))return;let e=N.querySelector(`img`);if(!e||!e.complete)return;let[t,n]=[1/0,-1/0];for(let e of de){P.copy(e).project(y);let r=(1-P.y)/2*window.innerHeight;t=Math.min(t,r),n=Math.max(n,r)}let r=t+Sr*(n-t),i=e.getBoundingClientRect().height,a=Math.max(0,r-i);N.style.top=`${a}px`,Math.abs(a-fe)<1&&N.classList.add(`placed`),fe=a},F=performance.now(),I=-1/0;_.setAnimationLoop(e=>{let t=Math.min(.25,(e-F)/1e3);F=e;let n=w.tick(t);C.update(n,y),S.update(n.sun);let r=E.getPolarAngle()>Math.PI/2;E.minDistance=r?re:ne,E.update(),j(),pe(),(n.time-I>=1||n.time<I)&&(I=n.time,T.paint(l.weather(n.time))),x.material.uniforms.uTime.value=e/1e3%3600;let i=y.matrixWorld.elements;x.material.uniforms.uRight.value.set(i[0],i[2]),T.update(t,E.target,y.position,n.sun,n.moons[0].light+n.moons[1].light),_.render(v,y)})}var Er=`
	uniform float uSize;
	uniform float uTime;
	uniform vec2 uRight;
	const float SEA_BELOW = 7.5;
	const float CELL = 9.0;
	const float SHOW = 0.15;
	const float WAVY = 0.33;
	const float SEA_WAVY = 0.165;
	const float STILL_CELL = 13.0;
	const float STILL = 0.11;
	const float OPEN = 6.0;
	const vec3 CREST = vec3(0.75, 0.88, 0.89);
	const vec3 TROUGH = vec3(0.47, 0.68, 0.84);
	float waveHash(vec2 p) {
		return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
	}
	// Clearly blue or blue-green in the painting.
	bool water(vec2 px) {
		vec3 c = texture2D(uMap, (floor(px) + 0.5) / uSize).rgb;
		return c.b > 0.12 && c.b > c.r * 2.5 && c.b > c.g * 0.7;
	}
	bool onWave(ivec2 at) {
		if (at.y == 0) return at.x == 1 || at.x == 2;
		if (at.y == 1) return at.x == 0 || at.x == 3 || at.x == 4;
		return false;
	}
	bool covers(vec2 px, vec2 centre, vec2 right, vec2 down) {
		vec2 d = px - centre;
		return onWave(ivec2(floor(vec2(dot(d, right), dot(d, down)) + vec2(2.5, 1.0))));
	}
	bool openWater(vec2 c, float r) {
		return water(c + vec2(r, 0.0)) && water(c - vec2(r, 0.0))
			&& water(c + vec2(0.0, r)) && water(c - vec2(0.0, r))
			&& water(c + vec2(0.7 * r, 0.7 * r)) && water(c - vec2(0.7 * r, 0.7 * r))
			&& water(c + vec2(0.7 * r, -0.7 * r)) && water(c - vec2(0.7 * r, -0.7 * r));
	}
	bool waveAt(vec2 px, bool sea, out vec3 colour) {
		// The painting's rows run north to south down v, the map's z.
		vec2 right = normalize(vec2(uRight.x, -uRight.y) + vec2(1e-6, 0.0));
		// (the painting's rows flipped, so the screen's down turns the other way)
		vec2 down = vec2(right.y, -right.x);
		vec2 cell = floor(px / CELL);
		float h = waveHash(cell);
		float cycle = 5.0 + 4.0 * waveHash(cell + 9.1);
		float phase = fract(uTime / cycle + h);
		vec2 centre = cell * CELL + vec2(3.5 + 2.0 * waveHash(cell + 2.3), 3.0 + 4.0 * waveHash(cell + 4.7));
		float wavy = sea ? SEA_WAVY : WAVY;
		if (phase < SHOW && waveHash(cell + 1.7) < wavy) {
			float life = phase / SHOW;
			float bob = fract(life * 1.8) > 0.5 ? 1.0 : 0.0;
			if (covers(px, centre + right * bob, right, down) && openWater(centre, 4.0)) {
				colour = (life > 0.18 && life < 0.82) ? CREST : TROUGH;
				return true;
			}
		}
		vec2 still = floor(px / STILL_CELL);
		vec2 at = still * STILL_CELL + vec2(4.0 + 5.0 * waveHash(still + 6.1), 4.0 + 5.0 * waveHash(still + 8.3));
		if (sea && waveHash(still + 3.9) < STILL && covers(px, at, right, down) && openWater(at, OPEN)) {
			colour = TROUGH;
			return true;
		}
		return false;
	}
`;function Dr(e,t,n){let r=e.cells+1,i=e.diameter/e.cells,o=e.diameter/2,s=new Float32Array(r*r*3),c=new Float32Array(r*r*2),l=Int16Array.from(t),u=-3e3;for(let e=0;e<r;e++)for(let n=0;n<r;n++){if(t[e*r+n]>u)continue;let[i,a]=[0,0];for(let[o,s]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]]){let c=t[(e+s)*r+n+o];n+o>=0&&n+o<r&&e+s>=0&&e+s<r&&c>u&&(i+=c,a++)}l[e*r+n]=a>0?Math.round(i/a):0}for(let t=0;t<r;t++)for(let n=0;n<r;n++){let a=t*r+n;s[a*3]=-o+n*i,s[a*3+1]=l[a]/10*Q,s[a*3+2]=-o+t*i,c[a*2]=n/e.cells,c[a*2+1]=1-t/e.cells}let d=new Uint32Array(e.cells*e.cells*6),f=0;for(let t=0;t<e.cells;t++)for(let n=0;n<e.cells;n++){let e=t*r+n;d.set([e,e+r,e+1,e+1,e+r,e+r+1],f),f+=6}let p=new T;p.setAttribute(`position`,new k(s,3)),p.setAttribute(`uv`,new k(c,2)),p.setIndex(new k(d,1));let m=new a({uniforms:{...q,uMap:{value:n},uSize:{value:e.size},uTime:{value:0},uRight:{value:new _(1,0)}},vertexShader:`
			#include <common>
			#include <logdepthbuf_pars_vertex>
			varying vec2 vUv;
			varying vec2 vXZ;
			varying float vHeight;
			void main() {
				vUv = uv;
				vXZ = position.xz;
				vHeight = position.y / ${Q.toFixed(1)};
				gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
				#include <logdepthbuf_vertex>
			}
		`,fragmentShader:`
			#include <common>
			#include <logdepthbuf_pars_fragment>
			${vn}
			uniform sampler2D uMap;
			varying vec2 vUv;
			varying vec2 vXZ;
			varying float vHeight;
			${Er}
			void main() {
				#include <logdepthbuf_fragment>
				vec4 c = texture2D(uMap, vUv);
				// Past the rim the painting is clear, and so is the sheet.
				if (c.a < 0.5) discard;
				vec3 colour = c.rgb;
				vec3 wave;
				if (waveAt(vUv * uSize, vHeight < SEA_BELOW, wave)) colour = wave;
				gl_FragColor = vec4(colour * landLight(vXZ), 1.0);
				#include <colorspace_fragment>
			}
		`});return new j(p,m)}function Or(e,t){let n=[...e.glyphs,...e.places.map(e=>[e.x,e.z,e.y,e.sprite])],i=new r(1,1);i.translate(0,.5,0);let o=new w;o.index=i.index,o.setAttribute(`position`,i.attributes.position),o.setAttribute(`uv`,i.attributes.uv);let s=new Float32Array(n.length*3),c=new Float32Array(n.length*2),l=new Float32Array(n.length*4),[u,d]=e.atlas;n.forEach(([t,n,r,i],a)=>{let[o,f,p,m]=e.sprites[i];s.set([t,r*Q,n],a*3),c.set([p*e.metresPerPx,m*e.metresPerPx],a*2),l.set([o/u,1-(f+m)/d,(o+p)/u,1-f/d],a*4)}),o.setAttribute(`aOffset`,new ee(s,3)),o.setAttribute(`aSize`,new ee(c,2)),o.setAttribute(`aRect`,new ee(l,4)),o.instanceCount=n.length;let f=new a({uniforms:{...q,uSheet:{value:t},uScaleFrom:{value:Cr},uMinScale:{value:wr}},vertexShader:`
			#include <common>
			#include <logdepthbuf_pars_vertex>
			attribute vec3 aOffset;
			attribute vec2 aSize;
			attribute vec4 aRect;
			uniform float uScaleFrom;
			uniform float uMinScale;
			varying vec2 vUv;
			varying vec2 vXZ;
			void main() {
				vXZ = aOffset.xz;
				vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
				vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
				float s = clamp(distance(cameraPosition, aOffset) / uScaleFrom, uMinScale, 1.0);
				vec3 p = aOffset + (right * position.x * aSize.x + up * position.y * aSize.y) * s;
				vUv = mix(aRect.xy, aRect.zw, uv);
				gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
				#include <logdepthbuf_vertex>
			}
		`,fragmentShader:`
			#include <common>
			#include <logdepthbuf_pars_fragment>
			${vn}
			uniform sampler2D uSheet;
			varying vec2 vUv;
			varying vec2 vXZ;
			void main() {
				#include <logdepthbuf_fragment>
				vec4 c = texture2D(uSheet, vUv);
				if (c.a < 0.5) discard;
				gl_FragColor = vec4(c.rgb * landLight(vXZ), 1.0);
				#include <colorspace_fragment>
			}
		`}),p=new j(o,f);return p.frustumCulled=!1,{mesh:p}}function kr(e){let t=Date.UTC(2026,9,25)/1e3,n=()=>Date.now()/1e3-t,r=n(),i=t=>e.at(t).sun[1]>0,a=r;for(let t=r;t<r+e.daySecs+20;t+=20)if(i(t)&&!i(t+20)){let[e,n]=[t,t+20];for(;n-e>.5;){let t=(e+n)/2;i(t)?e=t:n=t}a=n;break}let o=a-30-r;return{tick(t){return e.at(n()+o)}}}Tr(document.getElementById(`world`));var Ar=document.getElementById(`title`),jr=[...document.querySelectorAll(`.way`)],$=Ar.querySelector(`img`),Mr=[...document.querySelectorAll(`.way .label`)],Nr=document.getElementById(`mark`),Pr=()=>{if($.naturalWidth&&$.clientWidth){Nr.style.width=`${$.clientWidth*2/3}px`;for(let e of Mr)e.naturalWidth&&(e.style.width=`${e.naturalWidth*$.clientWidth/$.naturalWidth}px`)}};for(let e of[$,...Mr])e.addEventListener(`load`,Pr);addEventListener(`resize`,Pr),Pr();{let e=document.getElementById(`crt`),t=e.getContext(`2d`),n=`#17181c`,[r,i,a,o,s,c]=[.25,.15,.35,.25,.25,10],l=document.createElement(`canvas`),u=l.getContext(`2d`),d=0,f=0,p=()=>{let t=Math.min(devicePixelRatio,2);d=e.width=Math.round(innerWidth*t),f=e.height=Math.round(innerHeight*t),l.width=Math.ceil(innerWidth/3),l.height=Math.ceil(innerHeight/3)};p(),addEventListener(`resize`,p);let m=matchMedia(`(prefers-reduced-motion: reduce)`).matches,h=e=>1-(1-Math.min(1,Math.max(0,e)))**3,g=()=>{let e=u.createImageData(l.width,l.height);for(let t=0;t<e.data.length;t+=4){let n=Math.random()*255;e.data[t]=e.data[t+1]=e.data[t+2]=n,e.data[t+3]=255}u.putImageData(e,0,0),t.imageSmoothingEnabled=!1,t.drawImage(l,0,0,d,f)},_=(e,n)=>{let r=d/innerWidth;t.save(),t.globalAlpha=n,t.shadowColor=`#fff`,t.shadowBlur=12*r,t.fillStyle=`#fff`;let i=2*r;t.fillRect(d*(1-e)/2,f/2-i/2,d*e,i),t.restore()},v=(e,n)=>{let r=e/2*(d/innerWidth);if(r<=0)return;let i=r*.16;t.save(),t.globalAlpha=n,t.translate(d/2,f/2),t.shadowColor=`#fff`,t.shadowBlur=r*.8,t.fillStyle=`#fff`,t.beginPath();for(let e=0;e<8;e++){let n=e*Math.PI/4-Math.PI/2,a=e%2?i:r;t.lineTo(Math.cos(n)*a,Math.sin(n)*a)}t.closePath(),t.fill(),t.restore()},y=0,b=c=>{let l=(c-y)/1e3;t.fillStyle=n,t.fillRect(0,0,d,f);let u=l-r;if(u>=0&&u<i)_(2/3*h(u/i),1);else if((u-=i)>=0&&u<a){let e=h(u/a);_(2/3-(2/3-.45)*e,1),v(50*e,1)}else if((u-=a)>=0&&u<o){let e=u/o;_(.45*(1-e),1-e),v(50+(Math.hypot(innerWidth,innerHeight)*14-50)*e**2.5,1)}else if((u-=o)>=0&&u<s){let n=u/s;g(),t.fillStyle=`#fff`,t.globalAlpha=Math.max(0,1-n*3),t.fillRect(0,0,d,f),t.globalAlpha=1,e.style.opacity=`${1-n}`}else if(u>=s){e.remove(),removeEventListener(`resize`,p);return}requestAnimationFrame(b)};t.fillStyle=n,t.fillRect(0,0,d,f);let x=!1,S=()=>{x||(x=!0,C.disconnect(),m?(e.style.transition=`opacity ${s}s`,e.style.opacity=`0`,setTimeout(()=>e.remove(),s*1e3)):requestAnimationFrame(e=>{y=e,requestAnimationFrame(b)}))},C=new MutationObserver(()=>{Ar.classList.contains(`placed`)&&S()});C.observe(Ar,{attributes:!0,attributeFilter:[`class`]}),Ar.classList.contains(`placed`)&&S(),setTimeout(S,c*1e3)}var Fr=()=>{Pr(),Ar.classList.add(`gone`),Nr.classList.add(`shown`);for(let e of jr)e.classList.add(`shown`),e.hasAttribute(`href`)&&e.removeAttribute(`tabindex`);for(let e of[`pointerdown`,`wheel`,`keydown`])removeEventListener(e,Fr)};for(let e of[`pointerdown`,`wheel`,`keydown`])addEventListener(e,Fr,{passive:!0});