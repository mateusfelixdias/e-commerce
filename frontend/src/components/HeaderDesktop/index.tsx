'use client';

import Image from 'next/image';
import { Container } from './styles';
import search from '../../../public/search.svg';
import handbag from '../../../public/handbag.svg';

export function HeaderDesktop() {
  const handleSearch = () => {};

  return (
    <Container>
      <h1>capputeeno</h1>

      <div>
        <div>
          <input placeholder="Procurando por algo específico?" />

          <button onClick={handleSearch} title="Pesquisar">
            <Image src={search} alt="Lupa" />
          </button>
        </div>

        <button>
          <Image src={handbag} alt="Bolsa" />
        </button>
      </div>
    </Container>
  );
}
