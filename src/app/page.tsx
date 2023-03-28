import PokemonTable from '@/components/pokemon/table';
import SearchInput from '@/components/searchInput';

export default function Home() {
  return (
    <main>
      <SearchInput />
      <PokemonTable />
    </main>
  );
}
