import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {

    type FAQRow = {
        id: string;
        question: string;
        answer: string;
    };

    const faqRows: FAQRow[] = [
        {
            id: "faq-1",
            question: "Lorem ipsum dolor sit amet consectetur?",
            answer:
                "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
        },
        {
            id: "faq-2",
            question: "Lorem ipsum dolor sit amet consectetur?",
            answer: "",
        },
        {
            id: "faq-3",
            question: "Lorem ipsum dolor sit amet consectetur?",
            answer: "",
        },
        {
            id: "faq-4",
            question: "Lorem ipsum dolor sit amet consectetur?",
            answer: "",
        },
        {
            id: "faq-5",
            question: "Lorem ipsum dolor sit amet consectetur?",
            answer: "",
        },
    ];

    return (
        <section className="w-full py-12 mb-22 px-6 md:px-20 bg-[#FBFBFB]">
            <div className="max-w-4xl mx-auto space-y-8">
                <h2 className="text-2xl md:text-4xl font-bold uppercase text-center">
                    Frequently Asked Questions (FAQs)
                </h2>


                <Accordion type="single" collapsible defaultValue="faq-1">
                    {faqRows.map((row) => (
                        <AccordionItem key={row.id} value={row.id}>
                            <AccordionTrigger className="text-left text-lg font-semibold">
                                {row.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 text-sm">
                                {row.answer || "Answer coming soon..."}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}