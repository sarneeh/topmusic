import AlbumList from "@/modules/album/ui/AlbumList";
import Layout from "@/shared/ui/Layout";

const FavoritesPage = () => {
  return (
    <Layout title="Favorites" withViewToolbar>
      <AlbumList showOnlyFavorites />
    </Layout>
  );
};

export default FavoritesPage;
