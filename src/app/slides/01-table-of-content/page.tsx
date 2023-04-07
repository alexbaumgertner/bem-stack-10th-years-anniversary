import React from 'react';

import { Slide } from '@/components';

const Page = () => {
  return (
    <Slide>
      <ul>
        <li>Кратко о БЭМ</li>
        <li>
          <del>PSD</del>{' '}
          Figma &gt; HTML + CSS + JS
        </li>
        <li>Методология</li>
        <li>Бекенд, JSON</li>
        <li>Двухпроходная шаблонизация</li>
        <li>Что показать &gt; как показать</li>
        <li>Клиент</li>
        <li>React</li>
        <li>Благодарности</li>
      </ul>
    </Slide>
  );
};


export default Page;
