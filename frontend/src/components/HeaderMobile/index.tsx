import Image from 'next/image';
import { Container } from './styles';
import React, { useState } from 'react';
import search from '/public/search.svg';
import handbag from '/public/handbag.svg';
import { BsArrowLeftShort } from 'react-icons/bs';

interface Props {
  keyword: string;
  onSearch: () => void;
  onKeyword: (keyword: string) => void;
}

export default function HeaderMobile({ keyword, onSearch, onKeyword }: Props) {
  const [isShowInput, setIsShowInput] = useState(false);

  const handleIsShowInput = () => {
    setIsShowInput(true);
  };

  const handleHideSearchBar = () => {
    setIsShowInput(false);
  };

  const isDisabled = keyword.trim().length === 0;
  const cursorStyle = isDisabled ? 'not-allowed' : '';

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
              <input
                value={keyword}
                placeholder="Procurando por algo específico?"
                onChange={(event) => onKeyword(event.target.value)}
              />

              <button
                onClick={onSearch}
                disabled={isDisabled}
                style={{ cursor: cursorStyle }}
              >
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
