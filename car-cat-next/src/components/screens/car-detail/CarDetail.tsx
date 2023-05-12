import Layout from "@/components/layout/Layout";
import CarItem from "@/components/ui/car/CarItem";
import { ICarDataSingle } from "@/interfaces/car.interface";
import { FC } from "react";

const CarDetail: FC<ICarDataSingle> = ({car}) => {
    return (
        <Layout title={car.name} description="Expensive car">
            <CarItem car={car} />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quasi nemo reiciendis, pariatur sunt a veniam sed vitae numquam laboriosam soluta quas doloremque in iure tenetur blanditiis eius ut? Placeat.</p>
        </Layout>
    )
};

export default CarDetail;