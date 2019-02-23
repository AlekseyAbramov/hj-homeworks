const throttle = ( handler, ms ) => {
  let timeout;
  return () => {
    clearTimeout( timeout );
    timeout = setTimeout( handler, ms );
  }
};
class TextEditor {
  constructor( container, storageKey = '_text-editor__content' ) {
    this.container = container;
    this.contentContainer = container.querySelector( '.text-editor__content' );
    this.hintContainer = container.querySelector( '.text-editor__hint' );
    this.filenameContainer = container.querySelector( '.text-editor__filename' );
    this.storageKey = storageKey;
    this.registerEvents();
    this.load( this.getStorageData());
  }
  registerEvents() {
    const save = throttle( this.save.bind( this ), 1000 );
    this.contentContainer.addEventListener( 'input', save );
    document.getElementById('editor').addEventListener('dragover', event => {this.showHint(event)});
    document.getElementById('editor').addEventListener('drop', this.loadFile);
    //this.hideHint();
  }
  loadFile( e ) {
    e.preventDefault();
    const fileType = /^text\//;
    const file = e.dataTransfer.files[0];
    if (fileType.test(file.type)){
      //this.hideHint();
      //this.readFile(file);
    }
  }
  readFile( file ) {
    const fileContent = document.querySelector('.text-editor__content');
    const reader = new FileReader();
    fileContent.value = '';

    reader.addEventListener('load', event => {
      fileContent.value = event.currentTarget.result;
    });
      
    reader.readAsText(file);
  }
  setFilename( filename ) {
    this.filenameContainer.textContent = filename;
  }
  showHint( e ) {
    e.preventDefault();
    document.querySelector('.text-editor__hint').classList.add('text-editor__hint_visible');
  }
  hideHint() {
    console.log('uuu');
    document.querySelector('.text-editor__hint').classList.remove('text-editor__hint_visible');
  }
  load( value ) {
    this.contentContainer.value = value || '';
  }
  getStorageData() {
    return localStorage[ this.storageKey ];
  }
  save() {
    localStorage[ this.storageKey ] = this.contentContainer.value;
  }
}

new TextEditor( document.getElementById( 'editor' ));
