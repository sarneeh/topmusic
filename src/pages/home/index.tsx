import AlbumFilter from "@/modules/album/ui/AlbumFilter";
import AlbumList from "@/modules/album/ui/AlbumList";
import Layout from "@/shared/ui/Layout";

const HomePage = () => {
  return (
    <Layout>
      <AlbumFilter />
      <AlbumList />
    </Layout>
  );
};

export default HomePage;
