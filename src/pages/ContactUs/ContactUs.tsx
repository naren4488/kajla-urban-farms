import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function ContactUs() {
  return (
    <div className="pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary-dark mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch with us to learn more about our services or to start your rooftop garden
            journey today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-primary-dark mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We'd love to hear from you. Send us a message and we'll respond as soon as
                  possible.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-700">info@urbanagro.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-700">+91 123 456 7890</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700">
                    123 Urban Farming Street
                    <br />
                    City, State 123456
                    <br />
                    India
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-primary-dark mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 123 456 7890"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What is this regarding?"
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    className="mt-2 min-h-[150px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

