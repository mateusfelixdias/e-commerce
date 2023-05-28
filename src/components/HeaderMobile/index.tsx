'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Container } from './styles';
import search from '../../../public/search.svg';
import { BsArrowLeftShort } from 'react-icons/bs';
import handbag from '../../../public/handbag.svg';

export function HeaderMobile() {
  const [isShowInput, setIsShowInput] = useState(false);

  const handleSearch = () => {};

  const handleIsShowInput = () => {
    setIsShowInput(true);
  };

  const handleHideSearchBar = () => {
    setIsShowInput(false);
  };

  return (
    <Container>
      {!isShowInput && <h1>capputeeno</h1>}

      <div>
        {isShowInput ? (
          <>
            <button
              title="Voltar"
              onClick={handleHideSearchBar}
              style={{ color: 'var(--dark-grey)' }}
            >
              <BsArrowLeftShort size={30} />
            </button>

            <div>
              <input placeholder="Procurando por algo específico?" />

              <button onClick={handleSearch}>
                <Image src={search} alt="Lupa" title="Pesquisar" />
              </button>
            </div>
          </>
        ) : (
          <button onClick={handleIsShowInput}>
            <Image src={search} alt="Lupa" title="Abrir barra de pesquisa" />
          </button>
        )}

        <button>
          <Image src={handbag} alt="Bolsa" />
        </button>
      </div>
    </Container>
  );
}
