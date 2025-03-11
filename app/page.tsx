import { AppSidebar } from "@/components/app-sidebar";
import { LineChart } from "@/components/line-chart";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <main className="mx-60 space-y-10">
            <p>
              I'm baby marxism yuccie subway tile austin. Irony iceland kitsch
              quinoa portland vinyl palo santo trust fund godard gochujang tbh.
              Williamsburg asymmetrical snackwave wolf echo park organic
              pitchfork praxis mumblecore squid. Affogato street art fixie, hot
              chicken semiotics la croix man bun paleo succulents venmo polaroid
              DSA. Roof party jean shorts bicycle rights, hashtag ascot you
              probably haven't heard of them try-hard artisan flexitarian YOLO
              tumblr mustache lumbersexual cornhole 90's. Pok pok meh celiac
              portland echo park, four loko synth fanny pack meditation gentrify
              thundercats blue bottle air plant butcher flexitarian.
            </p>
            <LineChart />
            <p>
              Snackwave microdosing lyft trust fund, tilde jean shorts
              live-edge. Health goth kombucha 3 wolf moon cloud bread mustache
              irony. Live-edge kogi DIY vice. Solarpunk street art leggings
              intelligentsia single-origin coffee twee, photo booth scenester
              lomo gentrify vaporware selfies bushwick thundercats distillery.
              Scenester gochujang palo santo vaporware tbh. Poke coloring book
              disrupt, selvage actually chillwave man bun snackwave freegan.
              Waistcoat mixtape lyft, put a bird on it health goth gluten-free
              kinfolk.
            </p>
            <p>
              Wayfarers JOMO hammock, lumbersexual helvetica +1 sriracha fam
              health goth actually succulents four dollar toast kinfolk squid
              bushwick. Thundercats activated charcoal blackbird spyplane +1
              JOMO, paleo chia. Tumeric master cleanse kinfolk +1 bitters
              locavore. Activated charcoal fixie hella iceland, big mood
              single-origin coffee man braid literally tote bag tbh etsy
              chambray migas kombucha four dollar toast. Marxism butcher yr
              readymade venmo cloud bread unicorn post-ironic enamel pin
              leggings air plant messenger bag godard. Master cleanse
              post-ironic literally hexagon bitters hashtag locavore artisan
              selfies.
            </p>
            <p>
              Yuccie fanny pack food truck helvetica four loko microdosing.
              Shoreditch tacos kitsch vexillologist scenester. Marfa marxism
              helvetica migas woke fixie crucifix adaptogen. Literally
              farm-to-table cray, retro XOXO you probably haven't heard of them
              vape lo-fi sartorial truffaut air plant mlkshk synth put a bird on
              it snackwave. Man braid cloud bread williamsburg subway tile
              schlitz messenger bag. Chambray neutral milk hotel enamel pin
              freegan squid big mood synth edison bulb pinterest.
            </p>
            <p>
              Tousled meggings tote bag edison bulb banh mi try-hard yes plz,
              wayfarers lyft crucifix snackwave farm-to-table. Deep v photo
              booth wayfarers literally DIY pug post-ironic pinterest 8-bit.
              Artisan big mood neutral milk hotel, heirloom vibecession
              taxidermy gastropub schlitz humblebrag tote bag asymmetrical
              seitan 90's JOMO iPhone. Street art flexitarian XOXO tattooed
              blackbird spyplane actually hexagon, lo-fi yuccie cupping migas.
            </p>
            <p>
              Big mood cliche pork belly, praxis chambray godard truffaut ennui
              irony try-hard fixie. Marfa health goth fam, wolf Brooklyn tumblr
              gastropub green juice big mood. Pork belly pop-up taxidermy
              schlitz pok pok single-origin coffee 90's shoreditch asymmetrical.
              Neutral milk hotel lomo offal migas wayfarers, leggings big mood
              franzen.
            </p>
            <p>
              Farm-to-table glossier chambray mixtape, Brooklyn fanny pack
              cliche. Mlkshk la croix heirloom, neutral milk hotel keffiyeh
              retro locavore tilde beard farm-to-table synth whatever.
              Single-origin coffee polaroid tilde, ugh farm-to-table vinyl marfa
              art party cornhole iceland Brooklyn fingerstache seitan trust
              fund. Fixie you probably haven't heard of them lyft snackwave fam,
              photo booth big mood hot chicken lumbersexual. Whatever put a bird
              on it irony shoreditch neutral milk hotel post-ironic neutra
              kinfolk dreamcatcher hashtag bushwick gluten-free hexagon
              asymmetrical. 8-bit listicle YOLO pickled kale chips glossier
              letterpress iceland post-ironic craft beer crucifix fit authentic
              fingerstache vice. Tacos leggings ascot tousled glossier.
            </p>
            <p>
              Aesthetic solarpunk organic, flannel twee kinfolk thundercats
              seitan skateboard meditation copper mug poutine. Art party vape
              heirloom sriracha ethical sartorial retro normcore pug venmo
              meggings. Fingerstache neutral milk hotel selvage succulents yr
              sus trust fund JOMO. Celiac forage leggings pug. Pitchfork +1
              chicharrones gluten-free 8-bit, bespoke praxis thundercats forage
              fingerstache succulents raclette mukbang. Bodega boys la croix
              poutine, ascot neutral milk hotel vaporware pug sus letterpress
              hot chicken literally vibecession migas trust fund skateboard.
            </p>
            <p>
              Readymade poutine fanny pack, live-edge Brooklyn four loko etsy
              messenger bag hashtag disrupt tattooed. Quinoa pop-up sriracha,
              grailed sartorial church-key skateboard stumptown deep v polaroid
              readymade photo booth actually biodiesel. Woke jean shorts forage
              polaroid. XOXO hammock glossier edison bulb, adaptogen tilde craft
              beer drinking vinegar bushwick. Solarpunk big mood hammock yes plz
              celiac vape bespoke gentrify flannel cupping cold-pressed.
              Chartreuse solarpunk fashion axe, sus selvage lomo art party
              chicharrones shoreditch banh mi disrupt prism.
            </p>
            <p>
              Squid vexillologist vape lo-fi keffiyeh gorpcore air plant.
              Taxidermy hexagon VHS single-origin coffee pitchfork DSA hashtag
              hell of offal la croix mixtape iPhone retro ascot Brooklyn.
              Biodiesel kinfolk paleo tbh. Tonx taxidermy pork belly, succulents
              occupy echo park la croix you probably haven't heard of them
              shaman flexitarian 90's leggings activated charcoal praxis.
              Normcore hashtag etsy, tacos pickled taxidermy four dollar toast
              jianbing lo-fi distillery. La croix cliche big mood chia
              waistcoat. 90's pour-over chartreuse pinterest, iPhone squid pok
              pok cloud bread.
            </p>
            <p>Dummy text? More like dummy thicc text, amirite?</p>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
