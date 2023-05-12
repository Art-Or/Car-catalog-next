import Layout from "@/components/layout/Layout";
import { NextPageAuth } from "@/interfaces/page.interface";

const About: NextPageAuth = () => {
    return <Layout title="About">about us</Layout>
};

About.isOnlyUser = true;

export default About;