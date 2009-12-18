// Main controller for the in-viewer document editor. Orchestrates subviews.
dc.app.editor = new dc.View();
_.extend(dc.app.editor, {

  // Initializes the workspace, binding it to <body>.
  initialize : function(docId, isOwner) {
    this.el = $('body')[0];
    this.docId = docId;
    this.isOwner = isOwner;
    this.createSubViews();
    this.renderSubViews();
  },

  // Create all of the requisite subviews.
  createSubViews : function() {
    dc.ui.notifier          = new dc.ui.Notifier();
    this.controlPanel       = new dc.ui.ViewerControlPanel();
    this.sectionEditor      = new dc.ui.SectionEditor();
    this.annotationEditor   = new dc.ui.AnnotationEditor();
  },

  // Render all of the existing subviews and place them in the DOM.
  renderSubViews : function() {
    if (this.isOwner) $('#DV-docViewer').addClass('DV-isOwner');
    $('#DV-pageCollection').append(this.controlPanel.render().el);
  },

  notify : function(options) {
    dc.ui.notifier.show({
      mode      : options.mode,
      text      : options.text,
      anchor    : $('#control_panel'),
      position  : 'bottom -left',
      top       : 10
    });
  }

});