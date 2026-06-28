import { Suspense } from "react";
import RegistrationForm from "@components/customer/RegistrationForm";
import { generateMetadataForPage } from "@utils/helper";
import { staticSeo } from "@utils/metadata";

 export const revalidate = 60;

export async function generateMetadata() {
  return generateMetadataForPage("", staticSeo.register);
}

export default async function Register() {
  return (
    <Suspense fallback={<div className="text-center py-20 font-outfit text-neutral-500">Loading...</div>}>
      <RegistrationForm />
    </Suspense>
  );
}
