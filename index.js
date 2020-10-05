const model = [
  {type: 'title', value: 'Hello World from JS'},
  {type: 'text', value: 'here we go with same text'},
  {type: 'columns', value: [
      '1111111',
      '2222222222' ,
      '333333',
    ]}
];

const $site = document.querySelector('#site');

model.forEach((block) => {
  let html = '';
  if (block.type === 'title') {
    html = `
      <div class="row">
        <div class="col-sm">
          <h1>${block.value}</h1>
        </div>
      </div>
    `
  }
  else if (block.type === 'text') {
    html = `
      <div class="row">
        <div class="col-sm">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nobis.</p>
        </div>
      </div>
    `
  }
} );
