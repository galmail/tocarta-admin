Ext.data.JsonP.Ext_EventManager({"code_type":"nop","meta":{"private":true,"deprecated":{"version":"2.0.0","text":""}},"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/EventManager.html#Ext-EventManager' target='_blank'>EventManager.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p><p>This object has been deprecated in Sencha Touch 2.0.0. Please refer to the method documentation for specific alternatives.</p>\n        <div class='signature-box deprecated'>\n        <p>This class has been <strong>deprecated</strong> since 2.0.0</p>\n        \n\n        </div>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addListener' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventManager'>Ext.EventManager</span><br/><a href='source/EventManager.html#Ext-EventManager-method-addListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventManager-method-addListener' class='name expandable'>addListener</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement el, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> handler, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> scope], [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> options]</span> )<strong class='deprecated signature'>deprecated</strong></div><div class='description'><div class='short'>Appends an event handler to an element. ...</div><div class='long'><p>Appends an event handler to an element.  The shorthand version <a href=\"#!/api/Ext.EventManager-method-on\" rel=\"Ext.EventManager-method-on\" class=\"docClass\">on</a> is equivalent.  Typically you will\nuse <a href=\"#!/api/Ext.dom.Element-method-addListener\" rel=\"Ext.dom.Element-method-addListener\" class=\"docClass\">Ext.Element.addListener</a> directly on an Element in favor of calling this version.</p>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> since 2.0.0</p>\n        <p>Please use <a href=\"#!/api/Ext.dom.Element-method-addListener\" rel=\"Ext.dom.Element-method-addListener\" class=\"docClass\">addListener</a> on an instance of <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a> instead.</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement<div class='sub-desc'><p>The html element or id to assign the event handler to.</p>\n</div></li><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to listen for.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The handler function the event invokes. This function is passed\nthe following parameters:<ul>\n<li>evt : EventObject<div class=\"sub-desc\">The <a href=\"#!/api/Ext.event.Event\" rel=\"Ext.event.Event\" class=\"docClass\">EventObject</a> describing the event.</div></li>\n<li>t : Element<div class=\"sub-desc\">The <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Element</a> which was the target of the event.\nNote that this may be filtered by using the <tt>delegate</tt> option.</div></li>\n<li>o : Object<div class=\"sub-desc\">The options object from the addListener call.</div></li>\n</ul></p>\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The scope (<b><code>this</code></b> reference) in which the handler function is executed. <b>Defaults to the Element</b>.</p>\n</div></li><li><span class='pre'>options</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>An object containing handler configuration properties.\nThis may contain any of the following properties:<ul>\n<li>scope : Object<div class=\"sub-desc\">The scope (<b><code>this</code></b> reference) in which the handler function is executed. <b>Defaults to the Element</b>.</div></li>\n<li>delegate : String<div class=\"sub-desc\">A simple selector to filter the target or look for a descendant of the target</div></li>\n<li>stopEvent : Boolean<div class=\"sub-desc\">True to stop the event. That is stop propagation, and prevent the default action.</div></li>\n<li>preventDefault : Boolean<div class=\"sub-desc\">True to prevent the default action</div></li>\n<li>stopPropagation : Boolean<div class=\"sub-desc\">True to prevent event propagation</div></li>\n<li>normalized : Boolean<div class=\"sub-desc\">False to pass a browser event to the handler function instead of an <a href=\"#!/api/Ext.event.Event\" rel=\"Ext.event.Event\" class=\"docClass\">Ext.EventObject</a></div></li>\n<li>delay : Number<div class=\"sub-desc\">The number of milliseconds to delay the invocation of the handler after te event fires.</div></li>\n<li>single : Boolean<div class=\"sub-desc\">True to add a handler to handle just the next firing of the event, and then remove itself.</div></li>\n<li>buffer : Number<div class=\"sub-desc\">Causes the handler to be scheduled to run in an <a href=\"#!/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed\nby the specified number of milliseconds. If the event fires again within that time, the original\nhandler is <em>not</em> invoked, but the new handler is scheduled in its place.</div></li>\n<li>target : Element<div class=\"sub-desc\">Only call the handler if the event was fired on the target Element, <i>not</i> if the event was bubbled up from a child node.</div></li>\n</ul><br></p>\n\n<p>See <a href=\"#!/api/Ext.dom.Element-method-addListener\" rel=\"Ext.dom.Element-method-addListener\" class=\"docClass\">Ext.Element.addListener</a> for examples of how to use these options.</p>\n\n</div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventManager'>Ext.EventManager</span><br/><a href='source/EventManager.html#Ext-EventManager-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventManager-method-on' class='name expandable'>on</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement el, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> handler, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> scope], [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> options]</span> )<strong class='deprecated signature'>deprecated</strong></div><div class='description'><div class='short'>Appends an event handler to an element. ...</div><div class='long'><p>Appends an event handler to an element.  Shorthand for <a href=\"#!/api/Ext.EventManager-method-addListener\" rel=\"Ext.EventManager-method-addListener\" class=\"docClass\">addListener</a>.</p>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> since 2.0.0</p>\n        <p>Please use <a href=\"#!/api/Ext.dom.Element-method-addListener\" rel=\"Ext.dom.Element-method-addListener\" class=\"docClass\">addListener</a> on an instance of <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a> instead.</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement<div class='sub-desc'><p>The html element or id to assign the event handler to</p>\n</div></li><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to listen for.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The handler function the event invokes.</p>\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>(<code>this</code> reference) in which the handler function executes. <b>Defaults to the Element</b>.</p>\n</div></li><li><span class='pre'>options</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>An object containing standard <a href=\"#!/api/Ext.EventManager-method-addListener\" rel=\"Ext.EventManager-method-addListener\" class=\"docClass\">addListener</a> options</p>\n</div></li></ul></div></div></div><div id='method-onDocumentReady' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventManager'>Ext.EventManager</span><br/><a href='source/EventManager.html#Ext-EventManager-method-onDocumentReady' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventManager-method-onDocumentReady' class='name expandable'>onDocumentReady</a>( <span class='pre'></span> )<strong class='removed signature'>removed</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n        <div class='signature-box removed'>\n        <p>This method has been <strong>removed</strong> since 2.0.0</p>\n        <p>Please use <a href=\"#!/api/Ext-method-onReady\" rel=\"Ext-method-onReady\" class=\"docClass\">onReady</a></p>\n\n        </div>\n</div></div></div><div id='method-onWindowResize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventManager'>Ext.EventManager</span><br/><a href='source/EventManager.html#Ext-EventManager-method-onWindowResize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventManager-method-onWindowResize' class='name expandable'>onWindowResize</a>( <span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> fn, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> scope, <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> options</span> )<strong class='deprecated signature'>deprecated</strong></div><div class='description'><div class='short'>Adds a listener to be notified when the browser window is resized and provides resize event buffering (50 millisecond...</div><div class='long'><p>Adds a listener to be notified when the browser window is resized and provides resize event buffering (50 milliseconds),\npasses new viewport width and height to handlers.</p>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> since 2.0.0</p>\n        <p>Please listen to the <a href=\"#!/api/Ext.Viewport-event-resize\" rel=\"Ext.Viewport-event-resize\" class=\"docClass\">resize</a> on <a href=\"#!/api/Ext.Viewport\" rel=\"Ext.Viewport\" class=\"docClass\">Ext.Viewport</a> instead.</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The handler function the window resize event invokes.</p>\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The scope (<code>this</code> reference) in which the handler function executes. Defaults to the browser window.</p>\n</div></li><li><span class='pre'>options</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>Options object as passed to <a href=\"#!/api/Ext.dom.Element-method-addListener\" rel=\"Ext.dom.Element-method-addListener\" class=\"docClass\">Ext.Element.addListener</a></p>\n</div></li></ul></div></div></div><div id='method-removeAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventManager'>Ext.EventManager</span><br/><a href='source/EventManager.html#Ext-EventManager-method-removeAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventManager-method-removeAll' class='name expandable'>removeAll</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement el</span> )<strong class='deprecated signature'>deprecated</strong></div><div class='description'><div class='short'>Removes all event handers from an element. ...</div><div class='long'><p>Removes all event handers from an element.  Typically you will use <a href=\"#!/api/Ext.dom.Element-method-clearListeners\" rel=\"Ext.dom.Element-method-clearListeners\" class=\"docClass\">Ext.Element.clearListeners</a>\ndirectly on an Element in favor of calling this version.</p>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> since 2.0.0</p>\n        <p>Please use <a href=\"#!/api/Ext.dom.Element-method-clearListeners\" rel=\"Ext.dom.Element-method-clearListeners\" class=\"docClass\">clearListeners</a> on an instance of <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a> instead.</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement<div class='sub-desc'><p>The id or html element from which to remove all event handlers.</p>\n</div></li></ul></div></div></div><div id='method-removeListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventManager'>Ext.EventManager</span><br/><a href='source/EventManager.html#Ext-EventManager-method-removeListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventManager-method-removeListener' class='name expandable'>removeListener</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement el, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> fn, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> scope</span> )<strong class='deprecated signature'>deprecated</strong></div><div class='description'><div class='short'>Removes an event handler from an element. ...</div><div class='long'><p>Removes an event handler from an element.  The shorthand version <a href=\"#!/api/Ext.EventManager-method-un\" rel=\"Ext.EventManager-method-un\" class=\"docClass\">un</a> is equivalent.  Typically\nyou will use <a href=\"#!/api/Ext.dom.Element-method-removeListener\" rel=\"Ext.dom.Element-method-removeListener\" class=\"docClass\">Ext.Element.removeListener</a> directly on an Element in favor of calling this version.</p>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> since 2.0.0</p>\n        <p>Please use <a href=\"#!/api/Ext.dom.Element-method-removeListener\" rel=\"Ext.dom.Element-method-removeListener\" class=\"docClass\">removeListener</a> on an instance of <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a> instead.</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement<div class='sub-desc'><p>The id or html element from which to remove the listener.</p>\n</div></li><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event.</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The handler function to remove. <b>This must be a reference to the function passed into the <a href=\"#!/api/Ext.EventManager-method-addListener\" rel=\"Ext.EventManager-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>If a scope (<b><code>this</code></b> reference) was specified when the listener was added,\nthen this must refer to the same object.</p>\n</div></li></ul></div></div></div><div id='method-un' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventManager'>Ext.EventManager</span><br/><a href='source/EventManager.html#Ext-EventManager-method-un' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventManager-method-un' class='name expandable'>un</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement el, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> fn, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> scope</span> )<strong class='deprecated signature'>deprecated</strong></div><div class='description'><div class='short'>Removes an event handler from an element. ...</div><div class='long'><p>Removes an event handler from an element.  Shorthand for <a href=\"#!/api/Ext.EventManager-method-removeListener\" rel=\"Ext.EventManager-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> since 2.0.0</p>\n        <p>Please use <a href=\"#!/api/Ext.dom.Element-method-removeListener\" rel=\"Ext.dom.Element-method-removeListener\" class=\"docClass\">removeListener</a> on an instance of <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a> instead.</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement<div class='sub-desc'><p>The id or html element from which to remove the listener.</p>\n</div></li><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event.</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The handler function to remove. <b>This must be a reference to the function passed into the <a href=\"#!/api/Ext.EventManager-method-on\" rel=\"Ext.EventManager-method-on\" class=\"docClass\">on</a> call.</b></p>\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>If a scope (<b><code>this</code></b> reference) was specified when the listener was added,\nthen this must refer to the same object.</p>\n</div></li></ul></div></div></div></div></div></div></div>","html_meta":{"deprecated":"        <div class='signature-box deprecated'>\n        <p>This class has been <strong>deprecated</strong> since 2.0.0</p>\n        \n\n        </div>\n","private":null},"aliases":{},"tagname":"class","extends":null,"inheritdoc":null,"subclasses":[],"alternateClassNames":[],"requires":[],"inheritable":false,"superclasses":[],"component":false,"singleton":true,"members":{"css_mixin":[],"event":[],"method":[{"meta":{"deprecated":{"version":"2.0.0","text":"Please use {@link Ext.dom.Element#addListener addListener} on an instance of Ext.Element instead."}},"owner":"Ext.EventManager","tagname":"method","name":"addListener","id":"method-addListener"},{"meta":{"deprecated":{"version":"2.0.0","text":"Please use {@link Ext.dom.Element#addListener addListener} on an instance of Ext.Element instead."}},"owner":"Ext.EventManager","tagname":"method","name":"on","id":"method-on"},{"meta":{"removed":{"version":"2.0.0","text":"Please use {@link Ext#onReady onReady}"}},"owner":"Ext.EventManager","tagname":"method","name":"onDocumentReady","id":"method-onDocumentReady"},{"meta":{"deprecated":{"version":"2.0.0","text":"Please listen to the {@link Ext.Viewport#event-resize resize} on Ext.Viewport instead."}},"owner":"Ext.EventManager","tagname":"method","name":"onWindowResize","id":"method-onWindowResize"},{"meta":{"deprecated":{"version":"2.0.0","text":"Please use {@link Ext.dom.Element#clearListeners clearListeners} on an instance of Ext.Element instead."}},"owner":"Ext.EventManager","tagname":"method","name":"removeAll","id":"method-removeAll"},{"meta":{"deprecated":{"version":"2.0.0","text":"Please use {@link Ext.dom.Element#removeListener removeListener} on an instance of Ext.Element instead."}},"owner":"Ext.EventManager","tagname":"method","name":"removeListener","id":"method-removeListener"},{"meta":{"deprecated":{"version":"2.0.0","text":"Please use {@link Ext.dom.Element#removeListener removeListener} on an instance of Ext.Element instead."}},"owner":"Ext.EventManager","tagname":"method","name":"un","id":"method-un"}],"cfg":[],"property":[],"css_var":[]},"mixedInto":[],"private":true,"statics":{"css_mixin":[],"event":[],"cfg":[],"method":[],"property":[],"css_var":[]},"name":"Ext.EventManager","uses":[],"parentMixins":[],"mixins":[],"id":"class-Ext.EventManager","files":[{"href":"EventManager.html#Ext-EventManager","filename":"EventManager.js"}]});