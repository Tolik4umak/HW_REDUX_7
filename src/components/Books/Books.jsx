import React from 'react'
import s from './style.module.css'
import book1 from '../../media/book1Small.png'
import book2 from '../../media/book2Small.png'

export default function Books() {

    const books = [
        {
            id:1,
            img: book1,
            name: 'Atomic One’s',
            price: 13.84,
            about:'As the book contains theoretical content as well as solved questions.',
            status:'Printed Book'
        },
        {
            id:2,
            img: book2,
            name: ' The Dark Light',
            price: 86.84,
            about:'As the book contains theoretical content as well as solved questions.',
            status:'Printed Book'
        },
    ]


  return (
    <div className={[s.box, 'container'].join(' ')}>
        <h3 className={s.title}>The Author’s Book</h3>
        <section className={s.content}>
            {
                books.map(book => (
                    <div key={book.id} className={s.book}>
                        <div className={s.img}>
                            <img src={book.img} alt="" />
                        </div>
                        <div className={s.descr}>
                            <h4 className={s.name}>{book.name}</h4>
                            <p className={s.price}>$ {book.price} USD</p>
                            <p className={s.about}>{book.about}</p>
                            <p className={s.status}>{book.status}</p>
                        </div>
                    </div>
                ))
            }

        </section>
    </div>
  )
}
