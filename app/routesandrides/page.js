// components/RouteCards.tsx  or  app/routes/page.tsx
export default function RouteSAndRidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-16">
        
        <div className="card-2">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-zinc-800 dark:text-zinc-100">
            Toril → Roxas Avenue
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FlipCard
              frontImage="/images/toriljeep1.png"  
              backContent={
                <>
                  <h4 className="text-2xl font-bold mb-4">Birtheena the Street Machine</h4>
                  <ul className="space-y-3 text-zinc-300">
                    <li>Color: Light Purple</li>
                    <li>Terminal: Fusion Gas Station</li>
                    <li>Toril - Roxas via Bankerohan Quirino UM Bolton Claveria</li>
                    <li>Roxas - Toril via Boulevard SM Ecoland Matina Crossing Bangkal Ulas Puan Bago</li>
                  </ul>
                </>
              }
            />
            
             <FlipCard
              frontImage="/images/toriljeep2.png"  
              backContent={
                <>
                  <h4 className="text-2xl font-bold mb-4">Donard - Jastine</h4>
                  <ul className="space-y-3 text-zinc-300">
                    <li>Color: Red</li>
                    <li>Terminal: Crossing Bayabas - Virgin Delos Reyes Street</li>
                    <li>Toril - Roxas via Bankerohan Quirino UM Bolton Claveria</li>
                    <li>Roxas - Toril via Boulevard SM Ecoland Matina Crossing Bangkal Ulas Puan Bago</li>
                  </ul>
                </>
              }
            />

              <FlipCard
              frontImage="/images/toriljeep3.png"  
              backContent={
                <>
                  <h4 className="text-2xl font-bold mb-4">Rangel (Glenn)</h4>
                  <ul className="space-y-3 text-zinc-300">
                    <li>Color: Dark Pink</li>
                    <li>Terminal: Fusion Gas Station</li>
                    <li>Toril - Roxas via Bankerohan Quirino UM Bolton Claveria</li>
                    <li>Roxas - Toril via Boulevard SM Ecoland Matina Crossing Bangkal Ulas Puan Bago</li>
                  </ul>
                </>
              }
            />

            <FlipCard
              frontImage="/images/toriljeep4.png"  
              backContent={
                <>
                  <h4 className="text-2xl font-bold mb-4">Mecoy - Attitude</h4>
                  <ul className="space-y-3 text-zinc-300">
                    <li>Color: Dark Purple</li>
                    <li>Terminal: Fusion Gas Station</li>
                    <li>Toril - Roxas via Bankerohan Quirino UM Bolton Claveria</li>
                    <li>Roxas - Toril via Boulevard SM Ecoland Matina Crossing Bangkal Ulas Puan Bago</li>
                  </ul>
                </>
              }
            />

            <FlipCard
              frontImage="/images/toriljeep5.png"  
              backContent={
                <>
                  <h4 className="text-2xl font-bold mb-4">Clentoy</h4>
                  <ul className="space-y-3 text-zinc-300">
                    <li>Color: Orange</li>
                    <li>Terminal: Crossing Bayabas - Virgin Delos Reyes Street</li>
                    <li>Toril - Roxas via Bankerohan Quirino UM Bolton Claveria</li>
                    <li>Roxas - Toril via Boulevard SM Ecoland Matina Crossing Bangkal Ulas Puan Bago</li>
                  </ul>
                </>
              }
            />

            <FlipCard
              frontImage="/images/toriljeep6.png"  
              backContent={
                <>
                  <h4 className="text-2xl font-bold mb-4">Ramliz</h4>
                  <ul className="space-y-3 text-zinc-300">
                    <li>Color: Green</li>
                    <li>Terminal: Crossing Bayabas - Virgin Delos Reyes Street</li>
                    <li>Toril - Roxas via Bankerohan Quirino UM Bolton Claveria</li>
                    <li>Roxas - Toril via Boulevard SM Ecoland Matina Crossing Bangkal Ulas Puan Bago</li>
                  </ul>
                </>
              }
            />

            <FlipCard
              frontImage="/images/toriljeep7.jpg"  
              backContent={
                <>
                  <h4 className="text-2xl font-bold mb-4">Prince - Attitude</h4>
                  <ul className="space-y-3 text-zinc-300">
                    <li>Color: Blue</li>
                    <li>Terminal: Fusion Gas Station</li>
                    <li>Toril - Roxas via Bankerohan Quirino UM Bolton Claveria</li>
                    <li>Roxas - Toril via Boulevard SM Ecoland Matina Crossing Bangkal Ulas Puan Bago</li>
                  </ul>
                </>
              }
            />

            <FlipCard
              frontImage="/images/toriljeep8.png"  
              backContent={
                <>
                  <h4 className="text-2xl font-bold mb-4">Team Black - Jackydons</h4>
                  <ul className="space-y-3 text-zinc-300">
                    <li>Color: Black</li>
                    <li>Terminal: Crossing Bayabas - Virgin Delos Reyes Street</li>
                    <li>Toril - Roxas via Bankerohan Quirino UM Bolton Claveria</li>
                    <li>Roxas - Toril via Boulevard SM Ecoland Matina Crossing Bangkal Ulas Puan Bago</li>
                  </ul>
                </>
              }
            />


          </div>
        </div>

        <div className="card-2">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-zinc-800 dark:text-zinc-100">
            Bunawan → Roxas Avenue
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FlipCard
              frontImage="/images/bunawanjeep1.png"
              backContent={
                <>
                  <h4 className="text-2xl font-bold mb-4">John - Sayaka & Reycille</h4>
                  <ul className="space-y-3 text-zinc-300">
                    <li>Color: Brown</li>
                    <li>Roxas - Bunawan via Bajada SM Lanang Sasa Panacan Ilang Tibungco</li>
                    <li>Bunawan - Roxas via Sasa R.Castillo Agdao Magsaysay Boulevard</li>
                  </ul>
                </>
              }
            />
            
            <FlipCard
              frontImage="/images/bunawanjeep2.png"
              backContent={
                <>
                  <h4 className="text-2xl font-bold mb-4">Jimnits - Sayaka & Reycille</h4>
                  <ul className="space-y-3 text-zinc-300">
                    <li>Color: Yellow</li>
                    <li>Roxas - Bunawan via Bajada SM Lanang Sasa Panacan Ilang Tibungco</li>
                    <li>Bunawan - Roxas via Sasa R.Castillo Agdao Magsaysay Boulevard</li>
                  </ul>
                </>
              }
            />

            <FlipCard
              frontImage="/images/bunawanjeep3.png"
              backContent={
                <>
                  <h4 className="text-2xl font-bold mb-4">John - Sayaka & Reycille</h4>
                  <ul className="space-y-3 text-zinc-300">
                    <li>Color: Orange</li>
                    <li>Roxas - Bunawan via Bajada Buhangin Airport Landmark Panacan Ilang Tibungco</li>
                    <li>Bunawan - Roxas via Landmark Airport Buhangin Dacudao Obrero USEP Lapu-Lapu Sta. Ana Holy Cross Guerrero</li>
                  </ul>
                </>
              }
            />

            <FlipCard
              frontImage="/images/bunawanjeep4.png"
              backContent={
                <>
                  <h4 className="text-2xl font-bold mb-4">Hannah - DailyBudol</h4>
                  <ul className="space-y-3 text-zinc-300">
                    <li>Color: Dark Purple</li>
                    <li>Roxas - Bunawan via Bajada Buhangin Airport Landmark Panacan Ilang Tibungco</li>
                    <li>Bunawan - Roxas via Landmark Airport Buhangin Dacudao Obrero USEP Lapu-Lapu Sta. Ana Holy Cross Guerrero</li>
                  </ul>
                </>
              }
            />

          </div>
        </div>

      </div>
    </div>
  );
}

function FlipCard({ frontImage, backContent }) {
  return (
    <div className="group h-[340px] md:h-[420px] w-full [perspective:1200px] cursor-pointer">
      <div className="
        relative 
        h-full 
        w-full 
        transition-all 
        duration-800 
        ease-out 
        [transform-style:preserve-3d] 
        group-hover:[transform:rotateY(180deg)]
        rounded-xl 
        shadow-xl
      ">
        <div
          className="
            absolute 
            inset-0 
            h-full 
            w-full 
            bg-cover 
            bg-center 
            [backface-visibility:hidden] 
            rounded-xl
            flex 
            items-end
          "
          style={{ backgroundImage: `url(${frontImage})` }}
        >
          <div className="p-6 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-b-xl">
            <p className="text-white text-xl md:text-2xl font-bold drop-shadow-xl">
            </p>
          </div>
        </div>

        {/* Back - Info */}
        <div className="
          absolute 
          inset-0 
          h-full 
          w-full 
          bg-zinc-900/95 
          text-white 
          p-6 md:p-8 
          flex 
          flex-col 
          justify-center 
          items-start 
          [backface-visibility:hidden] 
          rounded-xl 
          [transform:rotateY(180deg)]
          shadow-2xl
        ">
          {backContent}
        </div>
      </div>
    </div>
  );
}