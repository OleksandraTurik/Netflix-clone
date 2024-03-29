import React from "react";
import { buildImageUrl } from "../../helpers/imageURL";
import { IProductionCompany } from "../../models";

interface CompaniesProps {
  companiesList: IProductionCompany[];
}

export const Companies: React.FC<CompaniesProps> = ({ companiesList }) => {
  return (
    <>
      {companiesList.map((el) => (
        <img src={buildImageUrl(el.logo_path)} alt={el.name} key={el.id} />
      ))}
    </>
  );
};
