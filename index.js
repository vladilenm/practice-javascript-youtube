const fruits = [
  {id: 1, title: 'Яблоки', price: 20, img: 'https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348'},
  {id: 2, title: 'Апельсины', price: 30, img: 'https://fashion-stil.ru/wp-content/uploads/2019/04/apelsin-ispaniya-kg-92383155888981_small6.jpg'},
  {id: 3, title: 'Манго', price: 40, img: 'https://itsfresh.ru/upload/iblock/178/178d8253202ef1c7af13bdbd67ce65cd.jpg'},
]

/*
* 1. Динамически на основе массива вывести список карточек
* 2. Показать цену в модалке (и это должна быть 1 модалка)
* 3. Модалка для удаления с 2мя кнопками
* ---------
* 4. На основе $.modal нужно сделать другой плагин $.confirm (Promise)
* */


const modal = $.modal({
  title: 'Vladilen Modal',
  closable: true,
  content: `
    <p>Lorem ipsum dolor sit.</p>
    <p>Lorem ipsum dolor sit.</p>
  `,
  width: '400px',
  footerButtons: [
    {text: 'Ок', type: 'primary', handler() {
      console.log('Primary btn clicked')
      modal.close()
    }},
    {text: 'Cancel', type: 'danger', handler() {
        console.log('Danger btn clicked')
        modal.close()
      }}
  ]
})
