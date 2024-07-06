import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { RefundPolicy } from "@/components/RefundPolicy";
import { TermsAndConditions } from "@/components/TermsAndConditions";



export default async function NewPage({ params }: { params: { id: string } }) {

  return (
    <main className=" w-screen  flex flex-col items-center">
      {params.id == 'privacy-policy' ? <PrivacyPolicy /> : params.id == 'terms-and-conditions' ? <TermsAndConditions /> : params.id == 'refund-policy' ? <RefundPolicy /> : <>404</>}
    </main>
  );
}
