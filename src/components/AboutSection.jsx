import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Quality Assurance Analyst
                        </h3>

                        <p className="text-muted-foreground">
                            With over 3 years of experience in Quality Assurance,
                            I specialize in ensuring the highest quality of software
                            products through meticulous testing and validation. My
                            expertise includes both manual and automated testing methodologies,
                            utilizing tools like Selenium, Playwright, and Postman to deliver
                            robust and reliable applications.
                        </p>

                        <p className="text-muted-foreground">
                            I thrive in collaborative environments, working closely with
                            developers to identify and resolve issues early in the development
                            cycle. My strong analytical skills and attention to detail enable me
                            to create comprehensive test plans and execute them effectively,
                            ensuring that software releases are not only functional but also secure.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>

                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Automation </h4>
                                    <p className="text-muted-foreground"> Creating reliable and extensive test cases utilizing best practices </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> TBD </h4>
                                    <p className="text-muted-foreground"> Description block </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> TBD </h4>
                                    <p className="text-muted-foreground"> Description block </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};