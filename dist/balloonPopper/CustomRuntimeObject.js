var gdjs;(function(n){class r extends n.RuntimeObject{constructor(t,e){super(t,e);this._isUntransformedHitBoxesDirty=!0;this._untransformedHitBoxes=[];this._unrotatedAABB={min:[0,0],max:[0,0]};this._scaleX=1;this._scaleY=1;this._flippedX=!1;this._flippedY=!1;this.opacity=255;this._customCenter=null;this._localTransformation=new n.AffineTransformation;this._localInverseTransformation=new n.AffineTransformation;this._isLocalTransformationDirty=!0;this._instanceContainer=new n.CustomRuntimeObjectInstanceContainer(t,this),this._instanceContainer.loadFrom(e),this.getRenderer().reinitialize(this,t)}reinitialize(t){super.reinitialize(t),this._instanceContainer.loadFrom(t),this.getRenderer().reinitialize(this,this.getParent()),this.onCreated()}updateFromObjectData(t,e){return this._instanceContainer.updateFrom(t,e)}extraInitializationFromInitialInstance(t){t.customSize&&(this.setWidth(t.width),this.setHeight(t.height))}onDestroyFromScene(t){this.onDestroy(t),super.onDestroyFromScene(t),this._instanceContainer.onDestroyFromScene(t)}update(t){this._instanceContainer._updateObjectsPreEvents(),this.doStepPreEvents(t);const e=this.getRuntimeScene().getProfiler();e&&e.begin(this.type),this.doStepPostEvents(t),e&&e.end(this.type),this._instanceContainer._updateObjectsPostEvents()}onHotReloading(t){}doStepPreEvents(t){}doStepPostEvents(t){}onDestroy(t){}updatePreRender(t){this._instanceContainer._updateObjectsPreRender(),this.getRenderer().ensureUpToDate()}getRendererObject(){return this.getRenderer().getRendererObject()}getRenderer(){return this._instanceContainer.getRenderer()}onChildrenLocationChanged(){this._isUntransformedHitBoxesDirty=!0,this.invalidateHitboxes(),this.getRenderer().update()}updateHitBoxes(){this._isUntransformedHitBoxesDirty&&this._updateUntransformedHitBoxes();const t=this.getLocalTransformation();for(let e=0;e<this._untransformedHitBoxes.length;++e){e>=this.hitBoxes.length&&this.hitBoxes.push(new n.Polygon);for(let i=0;i<this._untransformedHitBoxes[e].vertices.length;++i)i>=this.hitBoxes[e].vertices.length&&this.hitBoxes[e].vertices.push([0,0]),t.transform(this._untransformedHitBoxes[e].vertices[i],this.hitBoxes[e].vertices[i]);this.hitBoxes[e].vertices.length=this._untransformedHitBoxes[e].vertices.length}}_updateUntransformedHitBoxes(){if(this._isUntransformedHitBoxesDirty=!1,this._untransformedHitBoxes.length=0,this._instanceContainer.getAdhocListOfAllInstances().length===0)this._unrotatedAABB.min[0]=0,this._unrotatedAABB.min[1]=0,this._unrotatedAABB.max[0]=0,this._unrotatedAABB.max[1]=0;else{let t=Number.MAX_VALUE,e=Number.MAX_VALUE,i=-Number.MAX_VALUE,s=-Number.MAX_VALUE;for(const a of this._instanceContainer.getAdhocListOfAllInstances()){if(!a.isIncludedInParentCollisionMask())continue;Array.prototype.push.apply(this._untransformedHitBoxes,a.getHitBoxes());const o=a.getAABB();t=Math.min(t,o.min[0]),e=Math.min(e,o.min[1]),i=Math.max(i,o.max[0]),s=Math.max(s,o.max[1])}for(this._unrotatedAABB.min[0]=t,this._unrotatedAABB.min[1]=e,this._unrotatedAABB.max[0]=i,this._unrotatedAABB.max[1]=s;this.hitBoxes.length<this._untransformedHitBoxes.length;)this.hitBoxes.push(new n.Polygon);this.hitBoxes.length=this._untransformedHitBoxes.length}}applyObjectTransformation(t,e,i){const s=i;s[0]=t,s[1]=e,this.getLocalTransformation().transform(s,i)}getLocalTransformation(){return this._isLocalTransformationDirty&&this._updateLocalTransformation(),this._localTransformation}getLocalInverseTransformation(){return this._isLocalTransformationDirty&&this._updateLocalTransformation(),this._localInverseTransformation}_updateLocalTransformation(){const t=Math.abs(this._scaleX),e=Math.abs(this._scaleY),i=this.getUnscaledCenterX()*t,s=this.getUnscaledCenterY()*e,a=this.angle*Math.PI/180;this._localTransformation.setToTranslation(this.x,this.y),this._localTransformation.rotateAround(a,i,s),this._flippedX&&this._localTransformation.flipX(i),this._flippedY&&this._localTransformation.flipY(s),this._localTransformation.scale(t,e),this._localInverseTransformation.copyFrom(this._localTransformation),this._localInverseTransformation.invert(),this._isLocalTransformationDirty=!1}applyObjectInverseTransformation(t,e,i){const s=i;s[0]=t,s[1]=e,this.getLocalInverseTransformation().transform(s,i)}getDrawableX(){this._isUntransformedHitBoxesDirty&&this._updateUntransformedHitBoxes();const t=this.getScaleX();return this._flippedX?this.x+(-this._unrotatedAABB.min[0]-this.getUnscaledWidth()+2*this.getUnscaledCenterX())*t:this.x+this._unrotatedAABB.min[0]*t}getDrawableY(){this._isUntransformedHitBoxesDirty&&this._updateUntransformedHitBoxes();const t=this.getScaleY();return this._flippedY?this.y+(-this._unrotatedAABB.min[1]-this.getUnscaledHeight()+2*this.getUnscaledCenterY())*t:this.y+this._unrotatedAABB.min[1]*t}getUnscaledWidth(){return this._isUntransformedHitBoxesDirty&&this._updateUntransformedHitBoxes(),this._unrotatedAABB.max[0]-this._unrotatedAABB.min[0]}getUnscaledHeight(){return this._isUntransformedHitBoxesDirty&&this._updateUntransformedHitBoxes(),this._unrotatedAABB.max[1]-this._unrotatedAABB.min[1]}getUnscaledCenterX(){return this._customCenter?this._customCenter[0]:(this._isUntransformedHitBoxesDirty&&this._updateUntransformedHitBoxes(),(this._unrotatedAABB.min[0]+this._unrotatedAABB.max[0])/2)}getUnscaledCenterY(){return this._customCenter?this._customCenter[1]:(this._isUntransformedHitBoxesDirty&&this._updateUntransformedHitBoxes(),(this._unrotatedAABB.min[1]+this._unrotatedAABB.max[1])/2)}setRotationCenter(t,e){this._customCenter||(this._customCenter=[0,0]),this._customCenter[0]=t,this._customCenter[1]=e,this._isLocalTransformationDirty=!0,this.invalidateHitboxes()}getCenterX(){return this._isUntransformedHitBoxesDirty&&this._updateUntransformedHitBoxes(),(this.getUnscaledCenterX()-this._unrotatedAABB.min[0])*this.getScaleX()}getCenterY(){return this._isUntransformedHitBoxesDirty&&this._updateUntransformedHitBoxes(),(this.getUnscaledCenterY()-this._unrotatedAABB.min[1])*this.getScaleY()}getWidth(){return this.getUnscaledWidth()*this.getScaleX()}getHeight(){return this.getUnscaledHeight()*this.getScaleY()}setWidth(t){const e=this.getUnscaledWidth();e!==0&&this.setScaleX(t/e)}setHeight(t){const e=this.getUnscaledHeight();e!==0&&this.setScaleY(t/e)}setSize(t,e){this.setWidth(t),this.setHeight(e)}setX(t){t!==this.x&&(this.x=t,this._isLocalTransformationDirty=!0,this.invalidateHitboxes(),this.getRenderer().updateX())}setY(t){t!==this.y&&(this.y=t,this._isLocalTransformationDirty=!0,this.invalidateHitboxes(),this.getRenderer().updateY())}setAngle(t){this.angle!==t&&(this.angle=t,this._isLocalTransformationDirty=!0,this.invalidateHitboxes(),this.getRenderer().updateAngle())}setScale(t){t<0&&(t=0),!(t===Math.abs(this._scaleX)&&t===Math.abs(this._scaleY))&&(this._scaleX=t*(this._flippedX?-1:1),this._scaleY=t*(this._flippedY?-1:1),this._isLocalTransformationDirty=!0,this.invalidateHitboxes(),this.getRenderer().update())}setScaleX(t){t<0&&(t=0),t!==Math.abs(this._scaleX)&&(this._scaleX=t*(this._flippedX?-1:1),this._isLocalTransformationDirty=!0,this.invalidateHitboxes(),this.getRenderer().update())}setScaleY(t){t<0&&(t=0),t!==Math.abs(this._scaleY)&&(this._scaleY=t*(this._flippedY?-1:1),this.invalidateHitboxes(),this.getRenderer().update())}getScaleMean(){return(Math.abs(this._scaleX)+Math.abs(this._scaleY))/2}getScale(){const t=Math.abs(this._scaleX),e=Math.abs(this._scaleY);return t===e?t:Math.sqrt(t*e)}getScaleY(){return Math.abs(this._scaleY)}getScaleX(){return Math.abs(this._scaleX)}setOpacity(t){t<0&&(t=0),t>255&&(t=255),this.opacity=t,this.getRenderer().updateOpacity()}getOpacity(){return this.opacity}hide(t){t===void 0&&(t=!0),this.hidden=t,this.getRenderer().updateVisibility()}flipX(t){t!==this._flippedX&&(this._scaleX*=-1,this._flippedX=t,this.invalidateHitboxes(),this.getRenderer().update())}flipY(t){t!==this._flippedY&&(this._scaleY*=-1,this._flippedY=t,this.invalidateHitboxes(),this.getRenderer().update())}isFlippedX(){return this._flippedX}isFlippedY(){return this._flippedY}}n.CustomRuntimeObject=r,r.supportsReinitialization=!1})(gdjs||(gdjs={}));
//# sourceMappingURL=CustomRuntimeObject.js.map
