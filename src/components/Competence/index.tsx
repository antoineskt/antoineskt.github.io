/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components'

const SectionCompetence = styled.section`
  padding-top: 30px;
  padding-bottom: 70px;
`

const H1 = styled.h1`
  font-size: 3em;
  margin-left: 70px;
  padding-bottom: 30px;
`
const DivTitle = styled.div`
  display: flex;
  padding-bottom: 20px;
`
const H2 = styled.h2`
  padding-left: 10px;
`

const DivCompetences = styled.div`
  margin-left: 70px;
`

const DivAllSvgTitle = styled.div`
  display: flex;
`

const DivSvgTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
`
export default function Competence() {
  return (
    <SectionCompetence>
      <H1>Mes compétences</H1>

      <DivCompetences>
        <DivTitle>
          <svg height="35" viewBox="0 0 512 512" width="35" xmlns="http://www.w3.org/2000/svg">
            <path d="m432 32h-352a64.07 64.07 0 0 0 -64 64v320a64.07 64.07 0 0 0 64 64h352a64.07 64.07 0 0 0 64-64v-320a64.07 64.07 0 0 0 -64-64zm-336 224a16 16 0 0 1 -10-28.49l64.39-51.51-64.39-51.51a16 16 0 1 1 20-25l80 64a16 16 0 0 1 0 25l-80 64a16 16 0 0 1 -10 3.51zm160 0h-64a16 16 0 0 1 0-32h64a16 16 0 0 1 0 32z" />
          </svg>
          <H2>J'ai pu travailler avec</H2>
        </DivTitle>
        <DivAllSvgTitle>
          <DivSvgTitle>
            <svg
              height="70"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 228"
              width="80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m210.483381 73.8236374c-2.655683-.9140871-5.407514-1.7789613-8.240911-2.5969006.465702-1.900627.893126-3.7766474 1.273161-5.6207704 6.238212-30.2810742 2.159451-54.6757186-11.768303-62.70747357-13.354969-7.70138944-35.196001.32854284-57.254392 19.52528477-2.121175 1.8459457-4.248274 3.8003425-6.374459 5.8486085-1.4167-1.3551821-2.831119-2.6647964-4.241893-3.9174513-23.117839-20.52640617-46.2899038-29.17651417-60.2039874-21.12151965-13.3422097 7.72371765-17.293381 30.65700725-11.6780788 59.35460545.5422551 2.7718805 1.1761011 5.6025433 1.8928804 8.4805964-3.2795041.9309471-6.4455448 1.9234107-9.4748826 2.9792133-27.1031859 9.4493647-44.4125156 24.2588525-44.4125156 39.6201647 0 15.865292 18.5815786 31.778428 46.8116526 41.427378 2.2278027.761436 4.5394499 1.481405 6.921727 2.16492-.7732831 3.112727-1.4458617 6.163025-2.0104451 9.138138-5.3541994 28.199544-1.1729114 50.591033 12.1337554 58.265994 13.744572 7.926039 36.8118301-.221003 59.2734951-19.855194 1.775316-1.552035 3.557011-3.197938 5.341896-4.923129 2.313471 2.227802 4.623294 4.336217 6.920816 6.313853 21.756733 18.722383 43.245072 26.282514 56.539435 18.586137 13.730902-7.948824 18.193343-32.002622 12.39987-61.267992-.442462-2.235094-.957376-4.51849-1.535629-6.842439 1.61993-.478918 3.210241-.973326 4.760909-1.487329 29.347849-9.723682 48.442518-25.443157 48.442518-41.520337 0-15.4169044-17.867534-30.3261857-45.516619-39.8443576zm-6.365346 70.9839276c-1.399838.463422-2.836131.911353-4.299764 1.345612-3.23986-10.256823-7.612532-21.163442-12.963542-32.431867 5.106312-11.000033 9.309927-21.7672137 12.459108-31.9575086 2.618773.7577901 5.160537 1.5570469 7.609799 2.4005042 23.689712 8.1552432 38.140127 20.2129004 38.140127 29.5036894 0 9.896384-15.60601 22.743273-40.945728 31.13957zm-10.514281 20.834442c2.561813 12.940759 2.927721 24.64071 1.230782 33.78705-1.524693 8.218583-4.590941 13.698093-8.38217 15.892632-8.067754 4.669773-25.320578-1.400294-43.92722-17.411857-2.133022-1.835466-4.281537-3.79533-6.436887-5.869571 7.21336-7.889128 14.422619-17.060529 21.458721-27.246268 12.375719-1.098179 24.067925-2.893546 34.671062-5.34463.522205 2.106593.986084 4.17263 1.385712 6.192644zm-106.3275674 48.872679c-7.8822932 2.783728-14.1601491 2.863471-17.9550235.675312-8.0750442-4.65747-11.4320133-22.635733-6.8529197-46.751959.5244838-2.761856 1.1487607-5.598897 1.8682739-8.498823 10.4869402 2.318938 22.0934778 3.987625 34.4988161 4.993303 7.0834926 9.967015 14.5009956 19.128391 21.9759136 27.150121-1.633145 1.57664-3.259911 3.07764-4.877562 4.492059-9.932382 8.682006-19.8857245 14.841841-28.6574984 17.939987zm-36.9275725-69.767727c-12.4828036-4.266499-22.7915743-9.811627-29.8577507-15.862556-6.349397-5.437588-9.5550817-10.835988-9.5550817-15.216408 0-9.321775 13.8976794-21.2117433 37.0765787-29.2931669 2.8124357-.980616 5.7565619-1.904728 8.8118733-2.7727918 3.2034061 10.4204114 7.4056553 21.3151817 12.4768798 32.3320737-5.1368419 11.18048-9.3987847 22.248865-12.6336326 32.791396-2.1781339-.626099-4.288372-1.285007-6.3188668-1.978547zm12.3784537-84.2591517c-4.8110332-24.5873955-1.6158291-43.1352541 6.4245837-47.7895344 8.5644409-4.95821666 27.5028138 2.1111493 47.4632705 19.834689 1.275894 1.132812 2.556801 2.3184823 3.841353 3.5451637-7.438008 7.986643-14.787615 17.079213-21.8082236 26.9874439-12.0398868 1.115952-23.5648583 2.9085836-34.1611607 5.3090876-.6661993-2.6798338-1.2563004-5.3127329-1.7598229-7.8868498zm110.4268332 27.2672294c-2.533105-4.3754063-5.133652-8.647374-7.784777-12.8026884 8.168002 1.032563 15.99379 2.4032381 23.342942 4.0805836-2.206387 7.0711887-4.956393 14.4645409-8.19352 22.0438091-2.322127-4.4086708-4.778224-8.8537956-7.364645-13.3217043zm-45.03178-43.8611468c5.04434 5.464929 10.09597 11.566438 15.064668 18.1865069-5.006975-.2364961-10.075921-.3595288-15.186788-.3595288-5.062567 0-10.094147.1202987-15.070136.3526937 4.97371-6.5585527 10.069085-12.6518596 15.192256-18.1796718zm-45.3202226 43.9367891c-2.5303719 4.3877096-4.9409009 8.8086837-7.2265745 13.23786-3.1847235-7.5528392-5.9092136-14.9799114-8.1347379-22.1513491 7.3040395-1.6345118 15.0929189-2.971011 23.2089741-3.98398-2.6884917 4.1935912-5.3104547 8.4970007-7.8476617 12.8965578zm8.0814237 65.35222c-8.38536-.935504-16.2913482-2.203195-23.5935651-3.792596 2.2610672-7.299483 5.0457066-14.88513 8.2978701-22.600646 2.2915975 4.425987 4.7116957 8.848784 7.2575606 13.246063h.0004556c2.5932554 4.479756 5.2799243 8.86792 8.0376788 13.147179zm37.5413689 31.030206c-5.183321-5.592518-10.353427-11.778782-15.402779-18.433027 4.901712.192295 9.899117.290722 14.978089.290722 5.217952 0 10.37621-.117565 15.453359-.343581-4.985103 6.774089-10.018505 12.969922-15.028669 18.485886zm52.198205-57.816696c3.421675 7.798904 6.306108 15.344908 8.596338 22.519991-7.422515 1.693293-15.436498 3.057134-23.880185 4.070559 2.657506-4.211364 5.280835-8.556696 7.858597-13.026427 2.607838-4.522133 5.083984-9.051102 7.42525-13.564123zm-16.89831 8.100562c-4.001751 6.938586-8.110131 13.5623-12.280938 19.81464-7.596585.543165-15.444702.822951-23.443647.822951-7.966593 0-15.71583-.247433-23.177988-.731817-4.338953-6.334359-8.536645-12.977667-12.5128789-19.846081h.0009114c-3.9657532-6.849729-7.6157223-13.757331-10.9230227-20.626198 3.306389-6.884818 6.9467889-13.800165 10.8897582-20.637592l-.0009113.001367c3.9534496-6.8556538 8.1142323-13.4666093 12.4130843-19.7613253 7.613444-.5755193 15.420551-.8758102 23.310591-.8758102h.000456c7.925582 0 15.742713.3025691 23.353878.8831012 4.233235 6.2486926 8.365766 12.8382311 12.334709 19.6947964 4.014056 6.9335749 7.70139 13.8028979 11.03603 20.5400769-3.324615 6.852919-7.003747 13.791507-11.000032 20.721891zm22.560091-122.1240512c8.572644 4.943635 11.906372 24.881307 6.520276 51.0257494-.343581 1.6682319-.730449 3.3674497-1.150584 5.0894514-10.620909-2.4506285-22.154083-4.274246-34.229054-5.407058-7.03428-10.0171377-14.323738-19.1238337-21.640537-27.0079496 1.967156-1.8924245 3.931578-3.6969038 5.887797-5.399767 18.899641-16.4476453 36.563943-22.94149194 44.612102-18.3004262zm-58.284676 78.4351498c12.624974 0 22.859925 10.2344954 22.859925 22.8599254 0 12.624974-10.234951 22.859927-22.859925 22.859927-12.624975 0-22.859926-10.234953-22.859926-22.859927 0-12.62543 10.234951-22.8599254 22.859926-22.8599254z"
                fill="#00d8ff"
              />
            </svg>
            <div>React</div>
          </DivSvgTitle>

          <DivSvgTitle>
            <svg height="70" viewBox="0 0 32 32" width="80" xmlns="http://www.w3.org/2000/svg">
              <path d="m16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854 2.854-1.281 2.854-2.854-1.281-2.854-2.854-2.854zm-7.99 8.526-.63-.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l.63-.156.177.625c.474 1.635 1.083 3.229 1.818 4.771l.135.281-.135.286c-.734 1.536-1.344 3.13-1.818 4.771zm-.921-9.74c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c.438-1.391.964-2.745 1.578-4.063-.615-1.318-1.141-2.672-1.578-4.063zm16.901 9.74-.177-.625c-.474-1.635-1.083-3.229-1.818-4.766l-.135-.286.135-.286c.734-1.536 1.344-3.13 1.818-4.771l.177-.62.63.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zm-.657-5.677c.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-.438 1.385-.964 2.745-1.578 4.063zm-16.255-4.068-.177-.625c-1.318-4.646-.917-7.979 1.099-9.141 1.979-1.141 5.151.208 8.479 3.625l.453.464-.453.464c-1.182 1.229-2.26 2.552-3.229 3.958l-.182.255-.313.026c-1.703.135-3.391.406-5.047.813zm2.531-8.838c-.359 0-.677.073-.943.229-1.323.766-1.557 3.422-.646 7.005 1.422-.318 2.859-.542 4.313-.672.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zm12.787 27.145c-.005 0-.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-.453-.464.453-.464c1.182-1.229 2.26-2.552 3.229-3.958l.177-.255.313-.031c1.703-.13 3.391-.401 5.052-.813l.63-.156.177.625c1.318 4.646.917 7.974-1.099 9.135-.49.281-1.042.422-1.604.411zm-5.464-4.505c2.078 2.026 4.047 3.172 5.458 3.172h.005c.354 0 .672-.078.938-.229 1.323-.766 1.563-3.422.646-7.005-1.422.318-2.865.542-4.313.667-.833 1.193-1.75 2.323-2.734 3.396zm7.99-13.802-.63-.161c-1.661-.406-3.349-.677-5.052-.813l-.313-.026-.177-.255c-.969-1.406-2.047-2.729-3.229-3.958l-.453-.464.453-.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zm-5.255-2.276c1.521.141 2.969.365 4.313.672.917-3.583.677-6.24-.646-7.005-1.318-.76-3.797.406-6.401 2.943.984 1.073 1.896 2.203 2.734 3.391zm-10.058 20.583c-.563.01-1.12-.13-1.609-.411-2.016-1.161-2.417-4.49-1.099-9.135l.177-.625.63.156c1.542.391 3.24.661 5.047.813l.313.031.177.255c.969 1.406 2.047 2.729 3.229 3.958l.453.464-.453.464c-2.526 2.604-4.969 4.031-6.865 4.031zm-1.588-8.567c-.917 3.583-.677 6.24.646 7.005 1.318.75 3.792-.406 6.401-2.943-.984-1.073-1.901-2.203-2.734-3.396-1.453-.125-2.891-.349-4.313-.667zm7.979.838c-1.099 0-2.224-.047-3.354-.141l-.313-.026-.182-.26c-.635-.917-1.24-1.859-1.797-2.828-.563-.969-1.078-1.958-1.557-2.969l-.135-.286.135-.286c.479-1.01.995-2 1.557-2.969.552-.953 1.156-1.906 1.797-2.828l.182-.26.313-.026c2.234-.188 4.479-.188 6.708 0l.313.026.182.26c1.276 1.833 2.401 3.776 3.354 5.797l.135.286-.135.286c-.953 2.021-2.073 3.964-3.354 5.797l-.182.26-.313.026c-1.125.094-2.255.141-3.354.141zm-2.927-1.448c1.969.151 3.885.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-.844-1.76-1.823-3.453-2.932-5.063-1.948-.151-3.906-.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063.849 1.76 1.828 3.453 2.932 5.063z" />
            </svg>
            <div>React Native</div>
          </DivSvgTitle>

          <DivSvgTitle>
            <svg
              height="70"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 256"
              width="80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m0 0h256v256h-256z" fill="#f7df1e" />
              <path d="m67.311746 213.932292 19.590908-11.856051c3.7794539 6.701105 7.2175746 12.370896 15.464432 12.370896 7.905117 0 12.88899-3.092318 12.88899-15.120254v-81.798096h24.057499v82.13821c0 24.917333-14.605816 36.258946-35.915175 36.258946-19.2451048 0-30.4164571-9.96734-36.0870603-21.995683" />
              <path d="m152.380952 211.354413 19.58847-11.341613c5.156572 8.421181 11.858489 14.607035 23.714946 14.607035 9.968153 0 16.324673-4.983873 16.324673-11.857676 0-8.248483-6.529625-11.170134-17.527873-15.980089l-6.012749-2.579505c-17.357206-7.387835-28.871111-16.667225-28.871111-36.257727 0-18.04353 13.7472-31.791543 35.228444-31.791543 15.294172 0 26.292013 5.327645 34.195911 19.247137l-18.731073 12.028343c-4.124444-7.388648-8.591034-10.309486-15.464431-10.309486-7.045689 0-11.513905 4.467809-11.513905 10.309486 0 7.217574 4.468216 10.139631 14.777702 14.607847l6.013968 2.577473c20.449524 8.764546 31.963428 17.699353 31.963428 37.804292 0 21.653537-17.012215 33.509588-39.86692 33.509588-22.339454 0-36.774603-10.653664-43.819073-24.573562" />
            </svg>
            <div>JavaScript</div>
          </DivSvgTitle>

          <DivSvgTitle>
            <svg
              height="70"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 256"
              width="80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m0 128v-128h128 128v128 128h-128-128z" fill="#007acc" transform="matrix(1 0 0 -1 0 256)" />
              <g fill="#fff">
                <path
                  d="m146.658132 223.436863.081269-10.483809h-16.660317-16.660317v-47.339683-47.339682h-11.784127-11.7841274v47.339682 47.339683h-16.6603175-16.6603175v10.280635c0 5.688888.1219048 10.443174.2844445 10.565079.1219048.16254 20.3987301.243809 44.9828569.203175l44.739048-.121905z"
                  transform="matrix(-1 0 0 -1 203.26928 352.285986)"
                />
                <path
                  d="m206.566631 234.272145c6.501588-1.625397 11.459048-4.510477 16.010159-9.224127 2.356826-2.519365 5.851429-7.111111 6.135873-8.208254.08127-.32508-11.052698-7.801905-17.798095-11.987302-.24381-.16254-1.219048.893968-2.316191 2.519365-3.291428 4.794921-6.745396 6.867302-12.027936 7.233016-7.76127.528254-12.759365-3.535238-12.71873-10.32127 0-1.991111.284444-3.169524 1.097143-4.79492 1.706666-3.535239 4.87619-5.648254 14.831746-9.955556 18.326349-7.883175 26.168889-13.084444 31.045079-20.48 5.445079-8.248889 6.664127-21.414603 2.966349-31.207619-4.063492-10.646349-14.140952-17.879365-28.322539-20.276825-4.388572-.772064-14.791112-.650159-19.504762.203174-10.280635 1.828572-20.033016 6.907937-26.046984 13.572064-2.356826 2.600635-6.948572 9.386666-6.664127 9.874285.121904.16254 1.178412.812699 2.356825 1.503492 1.137778.650159 5.445079 3.128889 9.508571 5.485715l7.354921 4.266666 1.544127-2.275555c2.153651-3.291429 6.867302-7.801905 9.711746-9.305397 8.167619-4.307302 19.382857-3.697778 24.909206 1.259683 2.356826 2.15365 3.332064 4.388571 3.332064 7.68 0 2.966349-.365714 4.266666-1.909841 6.501587-1.991112 2.844444-6.054604 5.241905-17.594921 10.24-13.206349 5.688889-18.895238 9.224127-24.096508 14.831746-3.006984 3.250794-5.851429 8.452063-7.029841 12.8-.975238 3.616508-1.219048 12.678095-.446984 16.335238 2.722539 12.759365 12.353015 21.658413 26.250158 24.299683 4.510477.853333 14.994286.528253 19.423492-.568889z"
                  transform="matrix(1 0 0 -1 0 352.38048)"
                />
              </g>
            </svg>
            <div>TypeScript</div>
          </DivSvgTitle>
        </DivAllSvgTitle>
      </DivCompetences>
    </SectionCompetence>
  )
}