import Image from 'next/image'
import './style.scss'

export default function CSR(){
  return<main>
      <h1>CSR - client side rendering.</h1>
        <p>src - типичный процесс передачи html документов в древние времена зарождения интернета (с веб технологями с 92г по 2015г).</p>
        <p>Особенность этого процесса в том, что ты не ебешь себе мозги и используешь сервер только для раздачи HTML доки + хуевой тучи JS кода и все.</p>
        <ul>
          <h1>Особенности:</h1>
          <li>SEO оптимизация (Search Engine Optimization) в таком процессе идет нахуй, потому что ты отправляешь клиенту буквально пустую HTML доку с одним div вокруг которого и строится весь сайт спомощью JS кода. <br /> Ты буквально отправляешь клиенту HTML доку в котрой только один этот тег div, а потом вокруг div ты строишь весь сайт с помощью js кода внутри браузера пользователя, а поисковые машинки гугл не могут понять какой контент хранится в div и не знает как его воспринимать</li>
        </ul>
      <article>
        <section>
          <h2>То, что получилось к тебя: </h2>
          <Image src="/study1.jpg" alt='' width={500} height={100}></Image>        
        </section>
        <section>
          <h2>Ожидание:</h2>
          <Image src="/study4.jpg" alt='' width={500} height={100}></Image>
          <h2>Реальность:</h2>
          <Image src="/study2.png" alt='' width={500} height={100}></Image>    
        </section>
      </article>
    </main>
}