import Link from 'next/link'
import './index.scss'

export default () => {
  return (
    <footer>
      <ul>
        <li>
          <Link href="/terms">이용약관</Link>
        </li>
        <li>
          <span className="separator">•</span>
          <Link href="/privacy">개인정보처리방침</Link>
        </li>
        <li>
          <span className="separator">•</span>
          <Link href="/about">소개</Link>
        </li>
        <li>
          <span className="separator">•</span>
          <Link href="/ads">광고문의</Link>
        </li>
        <li>
          <span className="separator">•</span>
          <a>고객센터</a>
        </li>
      </ul>
    </footer>
  )
}
