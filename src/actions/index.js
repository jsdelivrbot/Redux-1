
//selectBook is an action creators
export function selectBook(book){
    //console.log('A book has been selected '+book.title);
    //action creator returns an action(object with a type property)
    return({
        type:'BOOK_SELECTED',
        payload:book
    });
}
