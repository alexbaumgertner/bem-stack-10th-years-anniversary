import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      <main>
        БЭМ десять лет спустя
      </main>

      <menu>
        <ul>
          <li>
            <Link href="/slides/02-what-is-bem">
              Кратко о БЭМ: история, основные понятия
            </Link>
          </li>
          <li>
            <Link href="/slides/">
              Шаблонизация и шаблоны: XSLT, BEMXJST и другие (server side React)
            </Link>
          </li>
          <li>
            <Link href="/slides/">
              Клиентский JS: jQuery, i-bem, BackboneJS, React, Svetle
            </Link>
          </li>
          <li>
            <Link href="/slides/">
              Библиотеки блоков
            </Link>
          </li>
          <li>
            <Link href="/slides/">
              Инфраструктура: bem-tools, webpack
            </Link>
          </li>
          <li>
            <Link href="/slides/">
              БЭМ в 2023 году
            </Link>
          </li>
          <li>
            <Link href="/slides/">
              Ссылки, материалы, доклады, видео
            </Link>
          </li>
        </ul>
      </menu>
    </div>
  )
}
