(() => {
  const el = {
    htmlRoot: document.getElementById('htmlRoot'),
    location: document.getElementById('location'),
    stepIndicator: document.getElementById('stepIndicator'),
    title: document.getElementById('screenTitle'),
    prompt: document.getElementById('screenPrompt'),
    menu: document.getElementById('menu'),
    srLive: document.getElementById('srLive'),
    hintBar: document.getElementById('hintBar'),
    routeMap: document.getElementById('routeMap'),
    errorAlert: document.getElementById('errorAlert'),
    errorAlertText: document.getElementById('errorAlertText'),
    kioskScreen: document.getElementById('kioskScreen'),
    screenCategory: document.getElementById('screenCategory'),
  };

  // Current language: 'en' or 'et'
  let currentLang = 'en';

  // Accessibility settings (reset on page load)
  let speechRateMultiplier = 1.0;
  let globalVolumeMultiplier = 0.6;

  const translations = {
    en: {
      instructions: 'Use Up and Down arrow keys to move, press Enter to confirm. Press Backspace to return to the previous menu and R to repeat the last message.',
      instructionsFull: 'Use Up and Down arrow keys to navigate, Enter to select. Press R to repeat the last message.',
      instructionsShort: 'Arrow keys to navigate. R to repeat.',
      hintBar: 'Use Arrow keys to move, Enter to select, Backspace to go back, R to repeat, S to toggle system voice.',
      interactiveDemo: 'Interactive demo',
      trainTicketMachine: 'Train Ticket Purchase Machine',
      baltiJaam: 'Balti Jaam',

      // TTS Toggle
      ttsEnabled: 'System voice enabled.',
      ttsDisabled: 'System voice disabled. Use your screen reader.',
      ttsToggleHint: 'Press S to toggle system voice on or off.',

      // High contrast toggle
      highContrastEnabled: 'High contrast mode enabled.',
      highContrastDisabled: 'High contrast mode disabled.',
      highContrastToggleHint: 'Press C to toggle high contrast mode.',

      // Keyboard help toggle
      keyboardHelpVisible: 'Keyboard help visible.',
      keyboardHelpHidden: 'Keyboard help hidden.',
      keyboardHelpToggleHint: 'Press H to toggle keyboard help visibility.',

      // Keyboard shortcut labels
      keyboardShortcuts: 'Keyboard Shortcuts',
      navigate: 'Navigate',
      adjustValue: 'Adjust value',
      select: 'Select',
      goBack: 'Go back',
      repeat: 'Repeat',
      toggleVoice: 'Toggle voice',
      highContrast: 'High contrast',
      hideHelp: 'Hide help',

      // Accessibility settings screen
      configureAccessibility: 'Configure accessibility for this session',
      accessibilitySettingsTitle: 'Accessibility settings',
      speechRate: 'Speech rate',
      textSize: 'Text size',
      volumeLevel: 'Volume',
      highContrastSetting: 'High contrast',
      on: 'On',
      off: 'Off',
      saveAndContinue: 'Save and continue',
      resetToDefaults: 'Reset to defaults',
      settingsSaved: 'Settings saved.',
      settingsReset: 'Settings reset.',
      textSizeShortcutHint: 'Press plus or minus keys to adjust text size from any screen.',
      plusMinusKeys: 'Plus and Minus keys – Adjust text size from any screen',

      // Accessibility help screen
      accessibilityHelpTitle: 'Accessibility Help',
      accessibilityHelpIntro: 'This interface is designed for keyboard navigation. If you use a screen reader, turn on focus mode.',
      exitHelp: 'Exit help',

      // Keyboard shortcuts (for help screen list items)
      arrowKeysNav: 'Up and Down arrows – Move focus between menu items',
      arrowKeysAdjust: 'Left and Right arrows – Adjust values (date, time, quantity)',
      enterKey: 'Enter – Confirm selection',
      backspaceKey: 'Backspace – Go back to previous step',
      rKey: 'R – Repeat last message',
      sKey: 'S – Toggle system voice on or off (use with screen reader)',
      cKey: 'C – Toggle high contrast mode on or off',
      hKey: 'H – Open or close accessibility help',

      // Category labels
      destinationSelection: 'Destination Selection',
      timeAndDate: 'Time & Date',
      ticketSelection: 'Ticket Selection',
      reviewAndPayment: 'Review & Payment',

      // Language selection
      languageTitle: 'Select Language',
      languagePrompt: 'Please select your language. Use Up and Down arrow keys to navigate and Enter to confirm. Press S to toggle system voice.',
      english: 'English',
      estonian: 'Eesti',
      changeLanguage: 'Change language',

      // Boot screen
      welcomeTitle: 'Welcome',
      welcomePrompt: 'Welcome to interactive train ticket machine demo. Press Enter to start.',
      start: 'Start',
      pressEnter: 'Press Enter',

      // Main menu
      mainMenu: 'Main menu',
      chooseOption: 'Make a choice',
      welcomeToStation: 'Welcome to Balti Jaam.',
      purchaseTicket: 'Purchase ticket',
      checkCard: 'Check your card validity',
      viewSchedules: 'View train schedules',
      contactStaff: 'Contact station staff',
      accessibilityHelp: 'Accessibility help',

      // Not available
      notAvailable: 'This functionality is not yet available.',
      back: 'Back',
      backspace: 'Backspace',

      // Departure station
      departureStationTitle: 'Departure station',
      chooseDepartureStation: 'Choose your departure station.',
      isSelected: 'is selected.',
      selectedAsDeparture: 'is selected as departure station.',

      // Arrival station
      arrivalStationTitle: 'Destination',
      chooseArrivalStation: 'Choose destination.',
      selectedRouteFrom: "You've selected route from",
      to: 'to',

      // Return ticket
      returnTicketTitle: 'Return ticket',
      wantReturnTicket: 'Would you like a round-trip ticket?',
      yes: 'Yes',
      no: 'No',
      oneWay: 'One way',
      returnTicket: 'Round-trip',

      // Date and time selection
      departureTimeTitle: 'Departure time',
      returnTimeTitle: 'Return time',
      chooseDepartureTime: 'Choose departure date and time.',
      chooseReturnTime: 'Choose return date and time.',
      useLeftRightDate: 'Left and Right arrows change date. Up and Down arrows change time.',
      date: 'Date',
      time: 'Time',
      today: 'Today',
      tomorrow: 'Tomorrow',
      fromPlatform: 'from platform',
      platform: 'Platform',
      selected: 'Selected',
      outbound: 'Outbound',
      returnJourney: 'Return',

      // Ticket type
      ticketTypeTitle: 'Ticket type',
      chooseTicketType: 'Choose ticket type.',
      euros: 'euros',
      adult: 'Adult',
      student: 'Student',
      senior: 'Senior',
      child: 'Child',
      disabled: 'Disabled passenger',
      quantity: 'Quantity',
      amount: 'amount',
      none: 'none',
      useLeftRight: 'Left and Right arrows adjust quantity.',

      // Review
      reviewTitle: 'Review',
      youveChosen: "You've chosen",
      tickets: 'tickets',
      ticketsSelected: 'ticket selected.',
      ticketsSelectedPlural: 'tickets selected.',
      onRoute: 'on the route from',
      departing: 'departing',
      confirmOrAdd: 'Press Enter to confirm, use arrow keys to add more tickets.',
      confirm: 'Confirm',
      addMoreTickets: 'Add more tickets',
      current: 'Current',
      addedOneTicket: 'Added one ticket. Total',
      total: 'Total',

      // Confirm purchase
      confirmPurchaseTitle: 'Confirm purchase',
      pressEnterConfirm: 'Press Enter to confirm the purchase of tickets.',
      totalAmount: 'Total amount',
      travellingOnRoute: "you're travelling on the route",
      confirmPurchaseBtn: 'Confirm purchase',
      confirmPrompt: 'Confirm purchase for',

      // Payment
      paymentTitle: 'Payment',
      paymentPrompt: 'Please insert your card to the payment terminal located to the right of this keypad, or use contactless payment at the top of the payment terminal.',
      proceedToPayment: 'Proceed to payment',
      continueBtn: 'Continue',

      // Route map
      routeMap: 'Route',
      from: 'From',
      toDestination: 'Destination',

      // Final
      completedTitle: 'Finished',
      completed: 'Completed',
      thankYou: 'Thank you for your purchase. Your tickets are printing now. The printer slot is located to the left of the keypad.',
      timeUntilDeparture: 'Your train departs in',
      hours: 'hours',
      hour: 'hour',
      minutes: 'minutes',
      minute: 'minute',
      and: 'and',
      whereToGo: 'Where would you like to go?',
      chooseDestination: 'Choose destination for navigation instructions.',
      myPlatform: 'My platform',
      cafeteria: 'Cafeteria',
      bathroom: 'Bathroom',
      stationExit: 'Station exit',
      selver: 'Selver',
      hesburger: 'Hesburger',
      pirukabaar: 'Mega cool pie store',
      haveNiceJourney: 'Have a nice journey. Accessibility mode disabled.',

      // Platform directions
      platformDirections1: 'Platform 1 is approximately 50 metres to your right. Follow the tactile flooring and turn right at the 2nd junction. The platform is ahead of you.',
      platformDirections2: 'Platform 2 is approximately 80 metres to your right. Follow the tactile flooring to the 1st junction and turn right. Continue for 60 metres until you reach the platform.',
      platformDirections3: 'Platform 3 is approximately 100 metres to your left. Follow the tactile flooring to the 3rd junction on the left and turn left.',
      platformDirections4: 'Platform 4 is approximately 120 metres to your left. Follow the tactile flooring to the 4th junction and turn left. Continue straight and turn right at the 3rd junction.',

      // Other destinations
      cafeteriaDirections: 'The cafeteria is approximately 40 metres to your right. Follow the tactile flooring to the 1st junction and turn right. The cafeteria entrance is 20 metres ahead on your left.',
      bathroomDirections: 'The bathroom is approximately 30 metres straight ahead. Follow the tactile flooring past the 1st junction. The bathroom entrance is on your right, marked with a tactile sign on the left of the door.',
      exitDirections: 'The station exit is approximately 60 metres behind you. Turn around and follow the tactile flooring. The main exit doors open automatically.',
      selverDirections: 'Selver grocery store is approximately 70 metres to your left. Follow the tactile flooring to the 2nd junction and turn left. Continue straight for 40 metres. The store entrance is on your right.',
      hesburgerDirections: 'Hesburger is approximately 90 metres straight ahead. Follow the tactile flooring past the 2nd junction. Continue for 50 metres. The restaurant entrance is on your left, with automatic doors.',
      pirukabaarDirections: 'Pirukabaar is approximately 35 metres to your right. Follow the tactile flooring to the 1st junction and turn right. Continue for 15 metres. The entrance is on your right.',
      pirukabaarSpecial: 'Cabbage pies are 30 percent off only today!',

      restartDemo: 'Restart demo',

      // Contact staff
      callingAssistance: 'Calling for assistance',
      pleaseWaitCalling: 'Please wait, calling station staff.',
      videoCallInProgress: 'Video call in progress',
      staffConnected: 'Agent Jakob is on the line.',
      pressEnterToEndCall: 'Press enter to end the call.',
      endCall: 'End call',
      callEnded: 'Call ended.',

      // Cancel transaction
      cancelTransaction: 'Cancel transaction',
      transactionCancelled: 'Transaction cancelled.',

      // Error messages
      selectAtLeastOneTicket: 'Please select at least one ticket.',
      error: 'Error',

      // Confirmation
      areYouSure: 'Are you sure you want to confirm this purchase?',
      yesConfirm: 'Yes, confirm',
      noGoBack: 'No, go back',

      // Payment cancellation
      cancelPayment: 'Cancel payment',
      paymentCancelled: 'Payment cancelled.',

      // Hint bars for different screens
      hintBarType: 'Up/Down arrows to navigate, Left/Right arrows to adjust quantity, Enter to select, Backspace to go back, R to repeat.',
      hintBarTime: 'Up/Down arrows to change time, Left/Right arrows to change date, Enter to select, Backspace to go back, R to repeat.',
      hintBarPayment: 'Enter to continue, Backspace to cancel payment, R to repeat.',
    },
    et: {
      instructions: 'Kasuta üles ja alla nooli liikumiseks, vajuta Enter kinnitamiseks. Vajuta backspace eelmisesse menüüsse naasmiseks ja R viimase sõnumi kordamiseks.',
      instructionsFull: 'Kasuta üles ja alla nooli navigeerimiseks, Enter valimiseks. Vajuta R viimase sõnumi kordamiseks.',
      instructionsShort: 'Nooleklahvid navigeerimiseks. R kordamiseks.',
      hintBar: 'Nooleklahvid liikumiseks, Enter valimiseks, Backspace tagasi, R kordamiseks, S süsteemi hääle muutmiseks.',
      interactiveDemo: 'Interaktiivne demo',
      trainTicketMachine: 'Rongipiletite ostmise automaat',
      baltiJaam: 'Balti Jaam',

      // TTS Toggle
      ttsEnabled: 'Süsteemi hääl sisse lülitatud.',
      ttsDisabled: 'Süsteemi hääl välja lülitatud. Kasuta oma ekraanilugejat.',
      ttsToggleHint: 'Vajuta S, et süsteemi hääl sisse või välja lülitada.',

      // High contrast toggle
      highContrastEnabled: 'Kõrge kontrasti resiim sisse lülitatud.',
      highContrastDisabled: 'Kõrge kontrasti resiim välja lülitatud.',
      highContrastToggleHint: 'Vajuta C, et kõrge kontrastsusega resiimi sisse või välja lülitada.',

      // Keyboard help toggle
      keyboardHelpVisible: 'Klaviatuuri abi nähtaval.',
      keyboardHelpHidden: 'Klaviatuuri abi peidetud.',
      keyboardHelpToggleHint: 'Vajuta H, et klaviatuuri abi nähtavust muuta.',

      // Keyboard shortcut labels
      keyboardShortcuts: 'Klaviatuuri kiirklahvid',
      navigate: 'Navigeeri',
      adjustValue: 'Muuda väärtust',
      select: 'Vali',
      goBack: 'Mine tagasi',
      repeat: 'Korda',
      toggleVoice: 'Lülita hääl',
      highContrast: 'Kõrge kontrast',
      hideHelp: 'Peida abi',

      // Accessibility settings screen
      configureAccessibility: 'Seadista ligipääsetavus selle sessiooni jaoks',
      accessibilitySettingsTitle: 'Ligipääsetavuse seaded',
      speechRate: 'Kõne kiirus',
      textSize: 'Teksti suurus',
      volumeLevel: 'Helitugevus',
      highContrastSetting: 'Kõrge kontrast',
      on: 'Sees',
      off: 'Väljas',
      saveAndContinue: 'Salvesta ja jätka',
      resetToDefaults: 'Taasta vaikeväärtused',
      settingsSaved: 'Seaded salvestatud.',
      settingsReset: 'Seaded lähtestatud.',
      textSizeShortcutHint: 'Vajuta pluss või miinus klahve teksti suuruse muutmiseks igal ekraanil.',
      plusMinusKeys: 'Pluss ja Miinus klahvid – muuda teksti suurust igal ekraanil',

      // Accessibility help screen
      accessibilityHelpTitle: 'Ligipääsetavuse abi',
      accessibilityHelpIntro: 'See demo kasutajaliides on loodud klaviatuuriga navigeerimiseks. Kui kasutad ekraanilugejat, lülita sisse fookusrežiim (focus mode).',
      exitHelp: 'Välju abist',

      // Keyboard shortcuts (for help screen list items)
      arrowKeysNav: 'Üles ja alla nooled – liiguta fookust menüü kirjete vahel',
      arrowKeysAdjust: 'Vasakule ja paremale nooled – muuda väärtusi (kuupäev, kellaaeg, kogus)',
      enterKey: 'Enter – kinnita valik',
      backspaceKey: 'Backspace – mine eelmisele sammule tagasi',
      rKey: 'R – korda viimast sõnumit',
      sKey: 'S – lülita süsteemi hääl sisse või välja (kasuta ekraanilugejaga)',
      cKey: 'C – lülita kõrge kontrasti resiim sisse või välja',
      hKey: 'H – ava või sulge ligipääsetavuse abi',

      // Category labels
      destinationSelection: 'Sihtkoha valik',
      timeAndDate: 'Kuupäev ja kellaaeg',
      ticketSelection: 'Piletite valik',
      reviewAndPayment: 'Ülevaade ja makse',

      // Language selection
      languageTitle: 'Vali keel',
      languagePrompt: 'Palun vali keel. Kasuta üles ja alla nooli navigeerimiseks ja Enterit kinnitamiseks. Vajuta S, et süsteemi hääl sisse või välja lülitada.',
      english: 'English',
      estonian: 'Eesti',
      changeLanguage: 'Vaheta keelt',

      // Boot screen
      welcomeTitle: 'Tere tulemast',
      welcomePrompt: 'Tere tulemast interaktiivsesse rongipiletite automaadi demosse. Vajuta Enter, et alustada.',
      start: 'Alusta',
      pressEnter: 'Vajuta Enter',

      // Main menu
      mainMenu: 'Peamenüü',
      chooseOption: 'Tehke valik',
      welcomeToStation: 'Tere tulemast Balti jaama.',
      purchaseTicket: 'Osta pilet',
      checkCard: 'Kontrolli kaardi kehtivust',
      viewSchedules: 'Vaata rongide sõiduplaani',
      contactStaff: 'Võta ühendust jaama personaliga',
      accessibilityHelp: 'Ligipääsetavuse abi',

      // Not available
      notAvailable: 'See funktsioon ei ole veel saadaval.',
      back: 'Tagasi',
      backspace: 'Backspace',

      // Departure station
      departureStationTitle: 'Lähtekoht',
      chooseDepartureStation: 'Vali lähtejaam.',
      isSelected: 'on valitud.',
      selectedAsDeparture: 'on valitud lähtejaamaks.',

      // Arrival station
      arrivalStationTitle: 'Sihtkoht',
      chooseArrivalStation: 'Vali sihtkoht.',
      selectedRouteFrom: 'Oled valinud teekonna',
      to: 'sihtkohta',

      // Return ticket
      returnTicketTitle: 'Tagasisõidu pilet',
      wantReturnTicket: 'Kas soovite edasi-tagasi piletit?',
      yes: 'Jah',
      no: 'Ei',
      oneWay: 'Üks suund',
      returnTicket: 'Edasi-tagasi',

      // Date and time selection
      departureTimeTitle: 'Väljumisaeg',
      returnTimeTitle: 'Tagasisõidu aeg',
      chooseDepartureTime: 'Vali väljumise kuupäev ja kellaaeg.',
      chooseReturnTime: 'Vali tagasisõidu kuupäev ja kellaaeg.',
      useLeftRightDate: 'Vasak ja parem nooled muudavad kuupäeva. Üles ja alla nooled muudavad kellaaega.',
      date: 'Kuupäev',
      time: 'Kellaaeg',
      today: 'Täna',
      tomorrow: 'Homme',
      fromPlatform: 'platvormilt',
      platform: 'Platvorm',
      selected: 'Valitud',
      outbound: 'Minek',
      returnJourney: 'Tagasisõit',

      // Ticket type
      ticketTypeTitle: 'Pileti tüüp',
      chooseTicketType: 'Vali pileti tüüp.',
      euros: 'eurot',
      adult: 'Täiskasvanu',
      student: 'Õpilane',
      senior: 'Pensionär',
      child: 'Laps',
      disabled: 'Puudega reisija',
      quantity: 'Kogus',
      amount: 'kogus',
      none: 'pileteid pole',
      useLeftRight: 'Vasak ja parem nooled muudavad kogust.',

      // Review
      reviewTitle: 'Ülevaade',
      youveChosen: 'Oled valinud',
      tickets: 'piletit',
      ticketsSelected: 'pilet valitud.',
      ticketsSelectedPlural: 'piletit valitud.',
      onRoute: 'marsruudil',
      departing: 'väljumine',
      confirmOrAdd: 'Vajuta Enter kinnitamiseks, kasuta nooleklahve rohkemate piletite lisamiseks.',
      confirm: 'Kinnita',
      addMoreTickets: 'Lisa pileteid',
      current: 'Praegu',
      addedOneTicket: 'Lisatud üks pilet. Kokku',
      total: 'Kokku',

      // Confirm purchase
      confirmPurchaseTitle: 'Kinnita ost',
      pressEnterConfirm: 'Vajuta Enter piletite ostu kinnitamiseks.',
      totalAmount: 'Kogusumma',
      travellingOnRoute: 'sõidad teekonnal',
      confirmPurchaseBtn: 'Kinnita ost',
      confirmPrompt: 'Kinnita ost summas',

      // Payment
      paymentTitle: 'Makse',
      paymentPrompt: 'Palun sisesta oma kaart makseterminali, mis asub sellest klaviatuurist paremal pool, või kasuta kontaktivaba makset makseterminali ülaosas.',
      proceedToPayment: 'Jätka maksega',
      continueBtn: 'Jätka',

      // Route map
      routeMap: 'teekond',
      from: 'Algus',
      toDestination: 'Sihtkoht',

      // Final
      completedTitle: 'Lõpetatud',
      completed: 'Lõpetatud',
      thankYou: 'Täname ostu eest. Sinu pileteid prinditakse. Printeri ava asub klahvistikust vasakul pool.',
      timeUntilDeparture: 'Sinu rong väljub',
      timeUntilDepartureAfter: 'pärast',
      hourGenitive: 'tunni',
      minuteGenitive: 'minuti',
      and: 'ja',
      whereToGo: 'Kuhu soovid edasi liikuda?',
      chooseDestination: 'Vali sihtpunkt liikumisjuhiste saamiseks.',
      myPlatform: 'Minu platvorm',
      cafeteria: 'Kohvik',
      bathroom: 'Tualett',
      stationExit: 'Jaama väljapääs',
      selver: 'Selver',
      hesburger: 'Hesburger',
      pirukabaar: 'Pirukabaar',
      haveNiceJourney: 'Head reisi. Ligipääsetavuse režiim välja lülitatud.',

      // Platform directions (using Estonian number words for Finnish TTS)
      platformDirections1: 'Platvorm üks asub umbes viiekümne meetri kaugusel teist paremal. Järgige juhtteed ning keerake teisest ristmikust paremale. Platvorm asub teie ees.',
      platformDirections2: 'Platvorm kaks asub umbes kaheksakümne meetri kaugusel paremal. Järgige juhtteed esimese ristmikuni ja pöörake paremale. Jätkake kuuskümmend meetrit kuni platvormini.',
      platformDirections3: 'Platvorm kolm asub umbes saja meetri kaugusel vasakul. Järgige juhtteed kolmanda ristmikuni vasakul ja pöörake vasakule.',
      platformDirections4: 'Platvorm neli asub umbes saja kahekümne meetri kaugusel vasakul. Järgige juhtteed neljanda ristmikuni ja pöörake vasakule. Jätkake otse liikumist ning keerake kolmanda ristmiku juures paremale.',

      // Other destinations (using Estonian number words for Finnish TTS)
      cafeteriaDirections: 'Kohvik asub umbes neljakümne meetri kaugusel paremal. Järgige juhtteed esimese ristmikuni ja pöörake paremale. Kohviku sissepääs on kahekümne meetri kaugusel vasakul.',
      bathroomDirections: 'Tualett asub umbes kolmekümne meetri kaugusel otse ees. Järgige juhtteed esimesest ristmikust mööda. Tualeti sissepääs on paremal, tähistatud taktiilse sildiga uksest vasakul.',
      exitDirections: 'Jaama väljapääs asub umbes kuuekümne meetri kaugusel teie selja taga. Pöörake ümber ja järgige juhtteed. Peauksed avanevad automaatselt.',
      selverDirections: 'Selveri kauplus asub umbes seitsmekümne meetri kaugusel vasakul. Järgi juhtteed ning pööra teise ristmiku juures vasakule. Jätka otse nelikümmend meetrit. Kaupluse sissepääs on paremal.',
      hesburgerDirections: 'Hesburger asub umbes üheksakümne meetri kaugusel otse ees. Järgi juhtteed ja pööra kolmanda ristmiku juures paremale. Jätka viiskümmend meetrit. Automaatustega sissepääs asub seejärel vasakul.',
      pirukabaarDirections: 'Pirukabaar asub umbes kolmekümne viie meetri kaugusel paremal. Järgi juhtteed ja keera esimesel ristmikul paremale. Jätka viisteist meetrit. Sissepääs on paremal ning leitav ka kõlava muusika järgi.',
      pirukabaarSpecial: 'Kapsapirukad on täna ainult kolmkümmend protsenti soodsamad! Tule kohe!',

      restartDemo: 'Taaskäivita demo',

      // Contact staff
      callingAssistance: 'Helistab abile',
      pleaseWaitCalling: 'Palun oota, helistame jaama personalile.',
      videoCallInProgress: 'Videokõne käib',
      staffConnected: 'Agent Jakob on liinil.',
      pressEnterToEndCall: 'Vajuta enter kõne lõpetamiseks.',
      endCall: 'Lõpeta kõne',
      callEnded: 'Kõne lõpetatud.',

      // Cancel transaction
      cancelTransaction: 'Tühista tehing',
      transactionCancelled: 'Tehing tühistatud.',

      // Error messages
      selectAtLeastOneTicket: 'Palun vali vähemalt üks pilet.',
      error: 'Viga',

      // Confirmation
      areYouSure: 'Kas oled kindel, et soovid selle ostu kinnitada?',
      yesConfirm: 'Jah, kinnita',
      noGoBack: 'Ei, tagasi',

      // Payment cancellation
      cancelPayment: 'Tühista makse',
      paymentCancelled: 'Makse tühistatud.',

      // Hint bars for different screens
      hintBarType: 'Üles/Alla nooled navigeerimiseks, Vasak/Parem nooled koguse muutmiseks, Enter valimiseks, Backspace tagasi, R kordamiseks.',
      hintBarTime: 'Üles/Alla nooled kellaaja muutmiseks, Vasak/Parem nooled kuupäeva muutmiseks, Enter valimiseks, Backspace tagasi, R kordamiseks.',
      hintBarPayment: 'Enter jätkamiseks, Backspace makse tühistamiseks, R kordamiseks.',
    }
  };

  function t(key) {
    return translations[currentLang][key] || translations['en'][key] || key;
  }

  // Kiosk speech
  let speechEnabled = true;
  let lastSpoken = '';
  // The last required prompt for the current screen (what R repeats)
  let lastPrompt = '';
  // A simple queue so we can avoid interrupting ourselves between screens.
  let speechChain = Promise.resolve();

  function speakAsync(text, { interrupt = true, rememberSpoken = true, rememberPrompt = false, forceLang = null, skipLiveRegion = false } = {}) {
    if (rememberSpoken) lastSpoken = text;
    if (rememberPrompt) lastPrompt = text;

    // Update aria-live region for screen reader users, UNLESS:
    // - skipLiveRegion is true (menu navigation) AND TTS is disabled
    // When TTS is disabled for menu items, screen reader announces via native focus.
    // For everything else (instructions, R key repeat, etc.), always update aria-live.
    if (!skipLiveRegion || speechEnabled) {
      el.srLive.textContent = text;
    }

    if (!speechEnabled) return Promise.resolve();
    if (!('speechSynthesis' in window)) return Promise.resolve();

    const run = () => new Promise((resolve) => {
      try {
        const u = new SpeechSynthesisUtterance(text);
        u.rate = speechRateMultiplier;
        u.pitch = 1.0;

        // Allow forcing a specific language (for language picker)
        if (forceLang) {
          u.lang = forceLang;
        } else {
          // Use Finnish TTS for Estonian (Estonian TTS not widely supported)
          if (currentLang === 'et') {
            u.lang = 'fi-FI';
          } else {
            u.lang = 'en-US';
          }
        }

        u.onend = () => resolve();
        u.onerror = () => resolve();
        window.speechSynthesis.speak(u);
      } catch (_) {
        resolve();
      }
    });

    // If we are interrupting, cancel current speech and reset the queue.
    if (interrupt) {
      try { window.speechSynthesis.cancel(); } catch (_) {}
      speechChain = Promise.resolve();
    }

    speechChain = speechChain.then(run);
    return speechChain;
  }

  function repeatLast() {
    // R repeats the required prompt for the current screen.
    const text = lastPrompt || lastSpoken;
    if (text) speakAsync(text, { interrupt: true, rememberSpoken: false, rememberPrompt: false });
  }

  function getInstructions() {
    // Progressive instruction system: full on first screen, short on screens 2-4, none after
    state.screenVisitCount++;
    if (state.screenVisitCount === 1) return t('instructionsFull');
    if (state.screenVisitCount <= 4) return t('instructionsShort');
    return ''; // None for screens 5+
  }

  // Convert numbers to Estonian words for Finnish TTS pronunciation
  function numberToEstonian(num) {
    const ones = ['', 'üks', 'kaks', 'kolm', 'neli', 'viis', 'kuus', 'seitse', 'kaheksa', 'üheksa'];
    const teens = ['kümme', 'üksteist', 'kaksteist', 'kolmteist', 'neliteist', 'viisteist', 'kuusteist', 'seitseteist', 'kaheksateist', 'üheksateist'];
    const tens = ['', '', 'kakskümmend', 'kolmkümmend', 'nelikümmend', 'viiskümmend', 'kuuskümmend', 'seitsekümmend', 'kaheksakümmend', 'üheksakümmend'];

    if (num === 0) return 'null';
    if (num < 10) return ones[num];
    if (num < 20) return teens[num - 10];
    if (num < 100) {
      const ten = Math.floor(num / 10);
      const one = num % 10;
      return tens[ten] + (one > 0 ? ' ' + ones[one] : '');
    }
    if (num < 1000) {
      const hundred = Math.floor(num / 100);
      const remainder = num % 100;
      let result = (hundred === 1 ? 'sada' : ones[hundred] + 'sada');
      if (remainder > 0) {
        result += ' ' + numberToEstonian(remainder);
      }
      return result;
    }
    return String(num); // Fallback for larger numbers
  }

  // Convert numbers to Estonian genitive case (for "in X hours/minutes")
  function numberToEstonianGenitive(num) {
    const onesGenitive = ['', 'ühe', 'kahe', 'kolme', 'nelja', 'viie', 'kuue', 'seitsme', 'kaheksa', 'üheksa'];
    const teensGenitive = ['kümne', 'üheteistkümne', 'kaheteistkümne', 'kolmeteistkümne', 'neljateistkümne', 'viieteistkümne', 'kuueteistkümne', 'seitsmeteistkümne', 'kaheksateistkümne', 'üheksateistkümne'];
    const tensGenitive = ['', '', 'kahekümne', 'kolmekümne', 'nelikümne', 'viiekümne', 'kuuekümne', 'seitsmekümne', 'kaheksakümne', 'üheksakümne'];

    if (num === 0) return 'nulli';
    if (num < 10) return onesGenitive[num];
    if (num < 20) return teensGenitive[num - 10];
    if (num < 100) {
      const ten = Math.floor(num / 10);
      const one = num % 10;
      return tensGenitive[ten] + (one > 0 ? ' ' + onesGenitive[one] : '');
    }
    if (num < 1000) {
      const hundred = Math.floor(num / 100);
      const remainder = num % 100;
      let result = (hundred === 1 ? 'saja' : onesGenitive[hundred] + 'saja');
      if (remainder > 0) {
        result += ' ' + numberToEstonianGenitive(remainder);
      }
      return result;
    }
    return String(num); // Fallback for larger numbers
  }

  // Convert station name to elative case (from X) for Estonian
  function stationToElative(station) {
    // Elative case: "from X" (-st/-ast)
    const elativeForms = {
      'Tallinn': 'Tallinnast',
      'Tartu': 'Tartust',
      'Narva': 'Narvast',
      'Pärnu': 'Pärnust'
    };
    return elativeForms[station] || station;
  }

  // Convert time string (HH:MM) to Estonian words for announcement
  function timeToEstonian(time) {
    const [hours, minutes] = time.split(':').map(Number);

    // For times on the hour (e.g., 10:00), just say the hour
    if (minutes === 0) {
      return numberToEstonian(hours);
    }

    // For other times, say hour and minutes with "null" for :00 -> :09
    const hourWord = numberToEstonian(hours);
    const minuteWord = numberToEstonian(minutes);

    // Add leading "null" for single digit minutes to match how times are read
    // e.g., 9:05 = "üheksa null viis"
    if (minutes < 10) {
      return `${hourWord} null ${minuteWord}`;
    }

    return `${hourWord} ${minuteWord}`;
  }

  // Format number for TTS: use words for Estonian, digits for English
  function formatNumberForTTS(num) {
    if (currentLang === 'et') {
      return numberToEstonian(num);
    }
    return String(num);
  }

  // Format time for TTS
  function formatTimeForTTS(time) {
    if (currentLang === 'et') {
      return timeToEstonian(time);
    }
    return time;
  }

  // Format date label for TTS (convert numbers to Estonian words)
  function formatDateForTTS(dateLabel) {
    if (currentLang !== 'et') return dateLabel;

    // Today and Tomorrow are already translated, just return them
    if (dateLabel === t('today') || dateLabel === t('tomorrow')) {
      return dateLabel;
    }

    // For other dates, replace all digits with Estonian words
    // This handles dates like "esmaspäev, 20. jaanuar"
    return dateLabel.replace(/\d+/g, (match) => numberToEstonian(parseInt(match)));
  }

  // Sound effects using Web Audio API
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
  }

  function playTone(frequency, duration, type = 'sine', volume = 0.3) {
    try {
      const ctx = getAudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = type;
      gainNode.gain.value = volume * globalVolumeMultiplier;

      // Fade out
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + duration);
    } catch (_) {}
  }

  function playConfirmSound() {
    // Short confirmation beep
    playTone(880, 0.1, 'sine', 0.2);
  }

  function playSelectSound() {
    // Quick click sound
    playTone(1200, 0.05, 'sine', 0.15);
  }

  function playTrainWhistle() {
    // Classic train whistle - two-tone "whoo-whoo" sound at same pitch
    return new Promise((resolve) => {
      try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;

        // First whistle "whoo"
        const osc1a = ctx.createOscillator();
        const osc1b = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1a.type = 'sine';
        osc1b.type = 'sine';
        osc1a.frequency.setValueAtTime(554, now); // Db5
        osc1b.frequency.setValueAtTime(740, now); // F#5
        osc1a.connect(gain1);
        osc1b.connect(gain1);
        gain1.connect(ctx.destination);
        gain1.gain.setValueAtTime(0, now);
        gain1.gain.linearRampToValueAtTime(0.2 * globalVolumeMultiplier, now + 0.08);
        gain1.gain.setValueAtTime(0.2 * globalVolumeMultiplier, now + 0.35);
        gain1.gain.linearRampToValueAtTime(0, now + 0.5);
        osc1a.start(now);
        osc1b.start(now);
        osc1a.stop(now + 0.5);
        osc1b.stop(now + 0.5);

        // Second whistle "whoo" - same pitch as first
        const osc2a = ctx.createOscillator();
        const osc2b = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2a.type = 'sine';
        osc2b.type = 'sine';
        osc2a.frequency.setValueAtTime(554, now + 0.55); // Db5 (same as first)
        osc2b.frequency.setValueAtTime(740, now + 0.55); // F#5 (same as first)
        osc2a.connect(gain2);
        osc2b.connect(gain2);
        gain2.connect(ctx.destination);
        gain2.gain.setValueAtTime(0, now + 0.55);
        gain2.gain.linearRampToValueAtTime(0.25 * globalVolumeMultiplier, now + 0.63);
        gain2.gain.setValueAtTime(0.25 * globalVolumeMultiplier, now + 1.0);
        gain2.gain.linearRampToValueAtTime(0, now + 1.2);
        osc2a.start(now + 0.55);
        osc2b.start(now + 0.55);
        osc2a.stop(now + 1.2);
        osc2b.stop(now + 1.2);

        // Resolve after whistle completes
        setTimeout(resolve, 1300);
      } catch (_) {
        resolve();
      }
    });
  }

  let phoneRingInterval = null;

  function playPhoneRing() {
    // Long continuous telephone ring sound
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      // Two frequencies combined for classic phone ring tone
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'sine';
      osc1.frequency.value = 440; // A4
      osc2.frequency.value = 480; // ~B4

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      // Long continuous tone with fade in/out
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.15 * globalVolumeMultiplier, now + 0.05);
      gain.gain.setValueAtTime(0.15 * globalVolumeMultiplier, now + 0.9);
      gain.gain.linearRampToValueAtTime(0, now + 1.0);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 1.0);
      osc2.stop(now + 1.0);
    } catch (_) {}
  }

  function startPhoneRinging() {
    playPhoneRing();
    phoneRingInterval = setInterval(playPhoneRing, 2000);
  }

  function stopPhoneRinging() {
    if (phoneRingInterval) {
      clearInterval(phoneRingInterval);
      phoneRingInterval = null;
    }
  }

  function playCallConnected() {
    // Short "connected" tone
    playTone(880, 0.15, 'sine', 0.2);
    setTimeout(() => playTone(1100, 0.2, 'sine', 0.2), 150);
  }

  function playCompletionSound() {
    // Success melody: three ascending tones
    playTone(523, 0.15, 'sine', 0.25); // C5
    setTimeout(() => playTone(659, 0.15, 'sine', 0.25), 150); // E5
    setTimeout(() => playTone(784, 0.3, 'sine', 0.25), 300); // G5
  }

  function playQuantitySound() {
    // Soft tick for quantity change
    playTone(600, 0.08, 'triangle', 0.15);
  }

  function playErrorSound() {
    // Error tone - descending beep
    playTone(400, 0.2, 'square', 0.25);
    setTimeout(() => playTone(300, 0.3, 'square', 0.25), 200);
  }

  function playPaymentConfirmSound() {
    // Single 1000 Hz beep for 750ms
    playTone(1000, 0.75, 'sine', 0.3);
  }

  function playTTSOnSound() {
    // Pleasant ascending "ding-dong" for TTS enabled
    playTone(800, 0.15, 'sine', 0.2); // Lower note
    setTimeout(() => playTone(1000, 0.2, 'sine', 0.2), 120); // Higher note
  }

  function playTTSOffSound() {
    // Gentle descending "dong-ding" for TTS disabled
    playTone(1000, 0.15, 'sine', 0.2); // Higher note
    setTimeout(() => playTone(800, 0.2, 'sine', 0.2), 120); // Lower note
  }

  function playFanfareSound() {
    // Obnoxious celebratory jingle melody - returns promise when complete
    return new Promise((resolve) => {
      // Part 1: Rising fanfare
      playTone(523, 0.15, 'square', 0.3); // C5
      setTimeout(() => playTone(659, 0.15, 'square', 0.3), 150); // E5
      setTimeout(() => playTone(784, 0.15, 'square', 0.3), 300); // G5
      setTimeout(() => playTone(1047, 0.2, 'square', 0.35), 450); // C6

      // Part 2: Jingle melody
      setTimeout(() => playTone(1047, 0.15, 'sine', 0.3), 700); // C6
      setTimeout(() => playTone(988, 0.15, 'sine', 0.3), 850); // B5
      setTimeout(() => playTone(880, 0.15, 'sine', 0.3), 1000); // A5
      setTimeout(() => playTone(784, 0.15, 'sine', 0.3), 1150); // G5
      setTimeout(() => playTone(659, 0.15, 'sine', 0.3), 1300); // E5
      setTimeout(() => playTone(784, 0.15, 'sine', 0.3), 1450); // G5

      // Part 3: Big triumphant finish
      setTimeout(() => playTone(1047, 0.25, 'square', 0.35), 1650); // C6
      setTimeout(() => playTone(1047, 0.15, 'square', 0.35), 1950); // C6
      setTimeout(() => playTone(1047, 0.4, 'square', 0.4), 2150); // C6 (long)

      // Resolve after all notes complete
      setTimeout(resolve, 2600);
    });
  }

  // Error alert display - WCAG compliant (no auto-dismiss)
  function showErrorAlert(message) {
    el.errorAlertText.textContent = message;
    el.errorAlert.classList.add('isVisible');
  }

  function hideErrorAlert() {
    el.errorAlert.classList.remove('isVisible');
    el.errorAlertText.textContent = '';
  }

  // High contrast mode toggle
  let highContrastEnabled = false;
  function toggleHighContrast() {
    highContrastEnabled = !highContrastEnabled;
    const message = highContrastEnabled ? t('highContrastEnabled') : t('highContrastDisabled');

    // Toggle class on document root
    if (highContrastEnabled) {
      el.htmlRoot.classList.add('highContrast');
      playTTSOnSound();
    } else {
      el.htmlRoot.classList.remove('highContrast');
      playTTSOffSound();
    }

    // Update screen reader and announce
    el.srLive.textContent = message;
    if (speechEnabled) {
      speakAsync(message, { interrupt: true, rememberSpoken: false, rememberPrompt: false });
    }
  }

  // Keyboard shortcuts overlay toggle
  function toggleKeyboardHelp() {
    // If already in help screen, return to previous screen
    if (state.screen === 'accessibilityHelp') {
      returnFromHelp();
    } else {
      // Open help screen
      accessibilityHelpScreen();
    }
  }

  // Route map display
  function showRouteMap(departure, arrival, time, platform, tickets, total) {
    const ticketSummary = getSelectedTicketsSummary();
    el.routeMap.innerHTML = `
      <div class="routeMap__container">
        <div class="routeMap__title">${t('routeMap')}</div>
        <div class="routeMap__track">
          <div class="routeMap__station">
            <div class="routeMap__dot"></div>
            <div class="routeMap__label">${t('from')}</div>
            <div class="routeMap__name">${escapeHtml(departure)}</div>
          </div>
          <div class="routeMap__line">
            <div class="routeMap__train">🚂</div>
          </div>
          <div class="routeMap__station routeMap__station--end">
            <div class="routeMap__dot"></div>
            <div class="routeMap__label">${t('toDestination')}</div>
            <div class="routeMap__name">${escapeHtml(arrival)}</div>
          </div>
        </div>
        <div class="routeMap__info">
          <div class="routeMap__infoItem">
            <div class="routeMap__infoLabel">${t('departureTimeTitle')}</div>
            <div class="routeMap__infoValue">${time}</div>
          </div>
          <div class="routeMap__infoItem">
            <div class="routeMap__infoLabel">${t('platform')}</div>
            <div class="routeMap__infoValue">${platform}</div>
          </div>
          <div class="routeMap__infoItem">
            <div class="routeMap__infoLabel">${t('tickets')}</div>
            <div class="routeMap__infoValue">${escapeHtml(ticketSummary)}</div>
          </div>
          <div class="routeMap__infoItem">
            <div class="routeMap__infoLabel">${t('totalAmount')}</div>
            <div class="routeMap__infoValue">${total} €</div>
          </div>
        </div>
      </div>
    `;
    el.routeMap.classList.add('isVisible');
  }

  function hideRouteMap() {
    el.routeMap.classList.remove('isVisible');
    el.routeMap.innerHTML = '';
  }

  // Navigation model
  let activeIndex = 0;
  let currentMenuItems = [];
  let prevFocusable = null;

  const state = {
    screen: 'boot',
    departure: 'Tallinn',
    arrival: null,
    // Outbound journey
    departureDateIndex: 0,
    departureTimeIndex: 0,
    departureTime: null,
    platform: null,
    // Return journey
    isReturn: false,
    returnDateIndex: 0,
    returnTimeIndex: 0,
    returnTime: null,
    returnPlatform: null,
    // Quantities per ticket type (keyed by label)
    quantities: {
      'Adult': 0,
      'Student': 0,
      'Senior': 0,
      'Child': 0,
      'Disabled': 0,
    },
    // Progressive instructions
    screenVisitCount: 0,
    // Position tracking for help screen returns
    returnToScreen: null,
    returnToActiveIndex: 0,
    // Position tracking for language change returns
    langReturnScreen: null,
    langReturnActiveIndex: 0,
    // Accessibility settings (1-5 scale, default 3)
    speechRate: 3,
    textSize: 3,
    volume: 3,
  };

  function resetQuantities() {
    state.quantities = { 'Adult': 0, 'Student': 0, 'Senior': 0, 'Child': 0, 'Disabled': 0 };
  }

  function resetState() {
    resetQuantities();
    state.arrival = null;
    state.departureDateIndex = 0;
    state.departureTimeIndex = 0;
    state.departureTime = null;
    state.platform = null;
    state.isReturn = false;
    state.returnDateIndex = 0;
    state.returnTimeIndex = 0;
    state.returnTime = null;
    state.returnPlatform = null;
    state.screenVisitCount = 0;
    state.returnToScreen = null;
    state.returnToActiveIndex = 0;
  }

  function getTotalTickets() {
    return Object.values(state.quantities).reduce((sum, q) => sum + q, 0);
  }

  function getTotalPrice() {
    const basePrice = data.ticketTypes.reduce((sum, t) => sum + (state.quantities[t.label] || 0) * t.price, 0);
    // Double price for return tickets
    return state.isReturn ? basePrice * 2 : basePrice;
  }

  function getSelectedTicketsSummary() {
    return data.ticketTypes
      .filter(t => state.quantities[t.label] > 0)
      .map(t => `${state.quantities[t.label]} ${getTicketTypeLabel(t.label)}`)
      .join(', ');
  }

  // Calculate time until departure and format announcement
  function getTimeUntilDeparture() {
    const dates = getDates();
    const departureDate = dates[state.departureDateIndex];

    // Only announce if departure is today
    if (!departureDate || !departureDate.isToday) {
      return null;
    }

    // Parse departure time (HH:MM format)
    const [hours, minutes] = state.departureTime.split(':').map(Number);

    // Create departure datetime
    const now = new Date();
    const departure = new Date();
    departure.setHours(hours, minutes, 0, 0);

    // Calculate difference in minutes
    const diffMs = departure - now;
    const diffMinutes = Math.floor(diffMs / 60000);

    // Don't announce if already past or less than 1 minute
    if (diffMinutes < 1) {
      return null;
    }

    // Calculate hours and minutes
    const hoursUntil = Math.floor(diffMinutes / 60);
    const minutesUntil = diffMinutes % 60;

    // Format announcement
    let parts = [];

    if (currentLang === 'et') {
      // Estonian: Use genitive case with "pärast" at the end
      if (hoursUntil > 0) {
        const hoursFormatted = numberToEstonianGenitive(hoursUntil);
        parts.push(`${hoursFormatted} ${t('hourGenitive')}`);
      }

      if (minutesUntil > 0) {
        const minutesFormatted = numberToEstonianGenitive(minutesUntil);
        parts.push(`${minutesFormatted} ${t('minuteGenitive')}`);
      }

      if (parts.length === 0) {
        return null;
      }

      const timeString = parts.join(` ${t('and')} `);
      return `${t('timeUntilDeparture')} ${timeString} ${t('timeUntilDepartureAfter')}.`;
    } else {
      // English: Standard format
      if (hoursUntil > 0) {
        const hoursWord = hoursUntil === 1 ? t('hour') : t('hours');
        const hoursFormatted = formatNumberForTTS(hoursUntil);
        parts.push(`${hoursFormatted} ${hoursWord}`);
      }

      if (minutesUntil > 0) {
        const minutesWord = minutesUntil === 1 ? t('minute') : t('minutes');
        const minutesFormatted = formatNumberForTTS(minutesUntil);
        parts.push(`${minutesFormatted} ${minutesWord}`);
      }

      if (parts.length === 0) {
        return null;
      }

      const timeString = parts.join(` ${t('and')} `);
      return `${t('timeUntilDeparture')} ${timeString}.`;
    }
  }

  // Generate dates (today and next 6 days)
  function getDates() {
    const dates = [];
    const now = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(now);
      d.setDate(d.getDate() + i);
      const fullDate = d.toLocaleDateString(currentLang === 'et' ? 'et-EE' : 'en-US', { weekday: 'long', day: 'numeric', month: 'long' });
      dates.push({
        date: d,
        fullDate: fullDate,
        label: i === 0 ? 'today' : i === 1 ? 'tomorrow' : fullDate,
        isToday: i === 0,
        isTomorrow: i === 1,
      });
    }
    return dates;
  }

  function getDateLabel(dateObj) {
    // Always include the actual date with today/tomorrow
    if (dateObj.isToday) return `${t('today')}, ${dateObj.fullDate}`;
    if (dateObj.isTomorrow) return `${t('tomorrow')}, ${dateObj.fullDate}`;
    return dateObj.label;
  }

  const data = {
    stations: ['Tallinn', 'Tartu', 'Narva', 'Pärnu'],
    times: [
      { time: '09:15', platform: 3 },
      { time: '10:45', platform: 2 },
      { time: '12:10', platform: 1 },
      { time: '14:30', platform: 4 },
      { time: '16:00', platform: 2 },
      { time: '18:30', platform: 1 },
    ],
    ticketTypes: [
      { label: 'Adult', price: 10 },
      { label: 'Student', price: 7 },
      { label: 'Senior', price: 6 },
      { label: 'Child', price: 5 },
      { label: 'Disabled', price: 5 },
    ]
  };

  function setScreen({ locationText, stepText, title, prompt, menuItems, focusTitle = true, speakPrompt = true, hintBarText = null, category = null, isReturnJourney = false, titleHasReturnIcon = false }) {
    // Clear any error alerts when changing screens
    hideErrorAlert();

    el.location.textContent = locationText ?? 'Interactive demo';
    el.stepIndicator.textContent = stepText ?? '';
    el.title.textContent = title;
    el.prompt.textContent = prompt;

    // Update category header
    if (category) {
      el.screenCategory.textContent = category;
      el.screenCategory.className = `kiosk__category kiosk__category--${getCategoryClass(category)}`;
      el.screenCategory.style.display = 'block';
    } else {
      el.screenCategory.textContent = '';
      el.screenCategory.style.display = 'none';
    }

    // Apply return journey styling
    if (isReturnJourney) {
      el.kioskScreen.classList.add('isReturnJourney');
    } else {
      el.kioskScreen.classList.remove('isReturnJourney');
    }

    // Apply return icon to title
    if (titleHasReturnIcon) {
      el.title.classList.add('hasReturnIcon');
    } else {
      el.title.classList.remove('hasReturnIcon');
    }

    // Update hint bar if custom text provided
    if (hintBarText !== null) {
      el.hintBar.textContent = hintBarText;
    } else {
      el.hintBar.textContent = t('hintBar');
    }

    // Hide route map by default
    hideRouteMap();

    // Build menu
    el.menu.innerHTML = '';
    currentMenuItems = menuItems || [];
    activeIndex = clamp(activeIndex, 0, Math.max(0, currentMenuItems.length - 1));

    currentMenuItems.forEach((item, idx) => {
      const btn = document.createElement('div');
      btn.setAttribute('role', 'option');
      btn.className = 'menuItem';

      // Add special classes for date displays and separators
      if (item.isDateDisplay) {
        btn.classList.add('isDateDisplay');
        if (item.isDateSelected) {
          btn.classList.add('isDateSelected');
        }
        if (item.isDateDisabled) {
          btn.classList.add('isDateDisabled');
        }
      }
      if (item.isSeparator) {
        btn.classList.add('isSeparator');
      }

      // Add action button classes
      if (item.isActionButton) {
        btn.classList.add('isActionButton');
      }
      if (item.isConfirm) {
        btn.classList.add('isConfirm');
      }

      // Add quantity adjustment indicator class
      if (item.hasQuantity) {
        btn.classList.add('hasQuantity');
      }
      if (item.hasAdjustable) {
        btn.classList.add('hasAdjustable');
      }

      // Add info text and keyboard shortcut classes
      if (item.isInfoText) {
        btn.classList.add('isInfoText');
      }
      if (item.isKeyboardShortcut) {
        btn.classList.add('isKeyboardShortcut');
      }

      btn.tabIndex = -1;
      btn.dataset.index = String(idx);

      // Build aria-label with proper punctuation for screen reader pacing
      const ariaLabel = item.meta
        ? `${stripEmojis(item.label)}, ${item.meta}`
        : stripEmojis(item.label);
      btn.setAttribute('aria-label', ariaLabel);

      btn.innerHTML = `
        <span>${escapeHtml(item.label)}</span>
        ${item.meta ? `<span class="menuItem__meta">${escapeHtml(item.meta)}</span>` : ''}
      `;
      btn.addEventListener('click', () => activateIndex(idx));
      el.menu.appendChild(btn);
    });

    requestAnimationFrame(() => {
      if (focusTitle) {
        el.title.focus();
      } else {
        focusActiveItem();
      }
      updateActiveVisual();
      if (speakPrompt) {
        // The required prompt is what R should repeat.
        speakAsync(prompt, { interrupt: true, rememberSpoken: true, rememberPrompt: true });
      } else {
        // Still update what R repeats, even if we aren't auto-speaking.
        lastPrompt = prompt;
      }
    });
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function getCategoryClass(category) {
    const categoryMap = {
      [t('destinationSelection')]: 'destination',
      [t('timeAndDate')]: 'time',
      [t('ticketSelection')]: 'payment',
      [t('reviewAndPayment')]: 'review'
    };
    return categoryMap[category] || 'destination';
  }

  function stripEmojis(text) {
    // Remove emojis and other symbols for TTS announcements
    return text.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '').trim();
  }

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function focusActiveItem() {
    const item = el.menu.querySelector(`.menuItem[data-index="${activeIndex}"]`);
    if (item) item.focus();
  }

  function updateActiveVisual() {
    el.menu.querySelectorAll('.menuItem').forEach((b) => {
      b.classList.remove('isActive');
      b.setAttribute('aria-selected', 'false');
    });
    const item = el.menu.querySelector(`.menuItem[data-index="${activeIndex}"]`);
    if (item) {
      item.classList.add('isActive');
      item.setAttribute('aria-selected', 'true');
    }
  }

  function moveActive(delta) {
    if (!currentMenuItems.length) return;

    let newIndex = activeIndex + delta;

    // Wrap around when going past the edges
    if (newIndex < 0) newIndex = currentMenuItems.length - 1;
    if (newIndex >= currentMenuItems.length) newIndex = 0;

    // Skip over date displays and separators (non-focusable items), wrapping if needed
    const len = currentMenuItems.length;
    let attempts = 0;
    while (attempts < len) {
      const item = currentMenuItems[newIndex];
      if (!item.isDateDisplay && !item.isSeparator) break;
      newIndex += delta;
      if (newIndex < 0) newIndex = len - 1;
      if (newIndex >= len) newIndex = 0;
      attempts++;
    }

    activeIndex = newIndex;

    focusActiveItem();
    updateActiveVisual();
    // Speak the newly focused option so arrow navigation is self-voicing.
    const item = currentMenuItems[activeIndex];
    if (item && item.label) {
      let announcement;
      let options = { interrupt: true, rememberSpoken: true, rememberPrompt: false, skipLiveRegion: true };

      // On language screen, speak each option in its respective language
      if (state.screen === 'lang' && item.langCode) {
        announcement = stripEmojis(item.label);
        options.forceLang = item.langCode === 'en' ? 'en-US' : 'fi-FI';
      }
      // On ticket type screen, announce "ticket type, amount X" for ticket items
      else if (state.screen === 'type' && item.ticketLabel !== undefined) {
        const labelClean = stripEmojis(item.label);
        if (item.quantity === 0) {
          announcement = `${labelClean}, ${t('none')}`;
        } else {
          const qtyFormatted = formatNumberForTTS(item.quantity);
          announcement = `${labelClean}, ${t('amount')} ${qtyFormatted}`;
        }
      } else {
        const labelClean = stripEmojis(item.label);
        const meta = item.meta ? `, ${item.meta}` : '';
        announcement = `${labelClean}${meta}`;
      }
      // Do not overwrite the required prompt (R should still repeat the prompt).
      speakAsync(announcement, options);
    }
  }

  function activateIndex(idx = activeIndex) {
    const item = currentMenuItems[idx];
    if (!item || typeof item.onSelect !== 'function') return;
    item.onSelect();
  }

  function advanceAfterSpeech(text, nextFn, { delayMs = 0 } = {}) {
    // Speak a confirmation message fully, then advance.
    speakAsync(text, { interrupt: true, rememberSpoken: true, rememberPrompt: false }).then(() => {
      if (delayMs > 0) {
        setTimeout(nextFn, delayMs);
      } else {
        nextFn();
      }
    });
  }

  // Update hint bar with current language
  function updateHintBar() {
    if (el.hintBar) {
      el.hintBar.textContent = t('hintBar');
    }
  }

  // Screens
  function languageScreen() {
    state.screen = 'lang';

    // Bilingual prompt text
    const englishPrompt = 'Accessibility mode enabled. Please select your language. Use Up and Down arrow keys to navigate and Enter to confirm. Press S to toggle system voice, C for high contrast, H for keyboard help. Press plus or minus to adjust text size.';
    const estonianPrompt = 'Ligipääsetavuse režiim sisse lülitatud. Palun vali keel. Kasuta üles ja alla nooli navigeerimiseks ja Enterit kinnitamiseks. Vajuta S süsteemi hääle muutmiseks, C kõrge kontrasti jaoks, H klaviatuuri abi jaoks. Vajuta pluss või miinus teksti suuruse muutmiseks.';
    const fullPrompt = `${englishPrompt} / ${estonianPrompt}`;

    // Always show in English first since user hasn't chosen yet
    setScreen({
      locationText: 'Interactive demo',
      stepText: '',
      title: 'Select Language / Vali keel',
      prompt: fullPrompt,
      menuItems: [
        {
          label: 'English',
          langCode: 'en',
          onSelect: () => {
            currentLang = 'en';
            el.htmlRoot.setAttribute('lang', 'en');
            updateHintBar();
            advanceAfterSpeech('English selected.', bootScreen);
          }
        },
        {
          label: 'Eesti keel',
          langCode: 'et',
          onSelect: () => {
            currentLang = 'et';
            el.htmlRoot.setAttribute('lang', 'et');
            updateHintBar();
            advanceAfterSpeech('Eesti keel valitud.', bootScreen);
          }
        }
      ],
      focusTitle: true,
      speakPrompt: false, // We'll speak manually below
    });

    // Speak the prompt in both languages with proper TTS
    // First English, then Estonian with Finnish TTS
    speakAsync(englishPrompt, { interrupt: true, rememberSpoken: false, rememberPrompt: false, forceLang: 'en-US' })
      .then(() => speakAsync(estonianPrompt, { interrupt: false, rememberSpoken: true, rememberPrompt: true, forceLang: 'fi-FI' }));
  }

  function bootScreen() {
    state.screen = 'boot';
    setScreen({
      locationText: t('interactiveDemo'),
      stepText: '',
      title: t('welcomeTitle'),
      prompt: t('welcomePrompt'),
      menuItems: [
        { label: t('start'), meta: t('pressEnter'), onSelect: () => mainMenu() },
        { label: t('changeLanguage'), onSelect: () => changeLanguageScreen() }
      ],
      focusTitle: true,
      speakPrompt: true,
    });
  }

  function mainMenu() {
    state.screen = 'main';
    activeIndex = 0;
    const instructions = getInstructions();
    const prompt = `${t('welcomeToStation')}${instructions ? ' ' + instructions : ''}`;
    setScreen({
      locationText: t('baltiJaam'),
      stepText: t('mainMenu'),
      title: t('chooseOption'),
      prompt,
      menuItems: [
        { label: t('purchaseTicket'), onSelect: () => departureStation() },
        // { label: t('configureAccessibility'), onSelect: () => accessibilitySettingsScreen() },
        // { label: t('checkCard'), onSelect: () => notAvailable(t('checkCard')) },
        // { label: t('viewSchedules'), onSelect: () => notAvailable(t('viewSchedules')) },
        { label: t('contactStaff'), onSelect: () => contactStaff() },
        { label: t('accessibilityHelp'), onSelect: () => accessibilityHelpScreen() },
        { label: t('changeLanguage'), onSelect: () => changeLanguageScreen() },
      ],
      focusTitle: false,
      speakPrompt: false, // We'll speak after the whistle
    });

    // Play train whistle before TTS
    playTrainWhistle().then(() => {
      speakAsync(prompt, { interrupt: false, rememberSpoken: true, rememberPrompt: true });
    });
  }

  function notAvailable(featureName) {
    state.screen = 'na';
    const prompt = t('notAvailable');
    setScreen({
      locationText: t('baltiJaam'),
      stepText: featureName,
      title: featureName,
      prompt,
      menuItems: [
        { label: t('back'), meta: t('backspace'), onSelect: () => goBack() }
      ],
      focusTitle: true,
      speakPrompt: true,
    });
  }

  function accessibilityHelpScreen() {
    // Save current position for return
    state.returnToScreen = state.screen;
    state.returnToActiveIndex = activeIndex;

    state.screen = 'accessibilityHelp';
    activeIndex = 0;

    const menuItems = [
      {
        label: t('accessibilityHelpIntro'),
        isInfoText: true,
        onSelect: () => {} // No action
      },
      {
        label: t('arrowKeysNav'),
        isKeyboardShortcut: true,
        onSelect: () => {} // No action
      },
      {
        label: t('arrowKeysAdjust'),
        isKeyboardShortcut: true,
        onSelect: () => {} // No action
      },
      {
        label: t('enterKey'),
        isKeyboardShortcut: true,
        onSelect: () => {} // No action
      },
      {
        label: t('backspaceKey'),
        isKeyboardShortcut: true,
        onSelect: () => {} // No action
      },
      {
        label: t('rKey'),
        isKeyboardShortcut: true,
        onSelect: () => {} // No action
      },
      {
        label: t('sKey'),
        isKeyboardShortcut: true,
        onSelect: () => {} // No action
      },
      {
        label: t('cKey'),
        isKeyboardShortcut: true,
        onSelect: () => {} // No action
      },
      {
        label: t('hKey'),
        isKeyboardShortcut: true,
        onSelect: () => {} // No action
      },
      {
        label: t('plusMinusKeys'),
        isKeyboardShortcut: true,
        onSelect: () => {} // No action
      },
      {
        label: t('exitHelp'),
        onSelect: () => returnFromHelp()
      }
    ];

    setScreen({
      locationText: t('baltiJaam'),
      stepText: t('accessibilityHelp'),
      title: t('accessibilityHelpTitle'),
      prompt: t('accessibilityHelpIntro'),
      menuItems,
      focusTitle: true,
      speakPrompt: true,
    });
  }

  function returnFromHelp() {
    // Restore previous screen
    const previousScreen = state.returnToScreen;
    const previousIndex = state.returnToActiveIndex;

    // Clear tracking
    state.returnToScreen = null;
    state.returnToActiveIndex = 0;

    // Navigate back to saved screen
    switch (previousScreen) {
      case 'boot': bootScreen(); break;
      case 'main': mainMenu(); break;
      case 'accessibilitySettings': accessibilitySettingsScreen(); break;
      case 'dep': departureStation(); break;
      case 'arr': arrivalStation(); break;
      case 'return': returnTicketQuestion(); break;
      case 'time': departureTime(); break;
      case 'returnTime': returnTime(); break;
      case 'type': ticketType(); break;
      case 'review': review(); break;
      case 'pay': paymentInstruction(); break;
      case 'done': finalMessage(); break;
      case 'directions': showDirections(); break;
      case 'contact': contactStaff(); break;
      default: mainMenu(); break;
    }

    // Restore focus position after screen renders
    setTimeout(() => {
      activeIndex = previousIndex;
      updateActive();
    }, 50);
  }

  // Change language screen (accessible from any screen)
  function changeLanguageScreen() {
    // Save where we came from
    state.langReturnScreen = state.screen;
    state.langReturnActiveIndex = activeIndex;

    state.screen = 'changeLang';

    setScreen({
      locationText: t('interactiveDemo'),
      stepText: '',
      title: t('changeLanguage'),
      prompt: t('languagePrompt'),
      menuItems: [
        {
          label: 'English',
          langCode: 'en',
          onSelect: () => {
            currentLang = 'en';
            el.htmlRoot.setAttribute('lang', 'en');
            updateHintBar();
            advanceAfterSpeech('English selected.', returnFromLanguageChange);
          }
        },
        {
          label: 'Eesti keel',
          langCode: 'et',
          onSelect: () => {
            currentLang = 'et';
            el.htmlRoot.setAttribute('lang', 'et');
            updateHintBar();
            advanceAfterSpeech('Eesti keel valitud.', returnFromLanguageChange);
          }
        }
      ],
      focusTitle: true,
      speakPrompt: true,
    });
  }

  function returnFromLanguageChange() {
    const previousScreen = state.langReturnScreen;
    const previousIndex = state.langReturnActiveIndex;

    state.langReturnScreen = null;
    state.langReturnActiveIndex = 0;

    switch (previousScreen) {
      case 'boot': bootScreen(); break;
      case 'main': mainMenu(); break;
      case 'dep': departureStation(); break;
      case 'arr': arrivalStation(); break;
      case 'return': returnTicketQuestion(); break;
      case 'time': departureTime(); break;
      case 'returnTime': returnTime(); break;
      case 'type': ticketType(); break;
      case 'review': review(); break;
      case 'confirmPurchase': confirmPurchaseQuestion(); break;
      case 'pay': paymentInstruction(); break;
      case 'done': finalMessage(); break;
      case 'directions': finalMessage(); break;
      default: mainMenu(); break;
    }

    setTimeout(() => {
      activeIndex = previousIndex;
      focusActiveItem();
      updateActiveVisual();
    }, 50);
  }

  // Apply accessibility settings
  function applySpeechRate() {
    const rateMap = { 1: 0.5, 2: 0.75, 3: 1.0, 4: 1.5, 5: 2.0 };
    speechRateMultiplier = rateMap[state.speechRate] || 1.0;
  }

  function applyTextSize() {
    const sizeMap = { 1: 0.8, 2: 0.9, 3: 1.0, 4: 1.15, 5: 1.3 };
    const multiplier = sizeMap[state.textSize] || 1.0;
    document.documentElement.style.setProperty('--text-size-multiplier', multiplier);
  }

  function applyVolume() {
    const volumeMap = { 1: 0.2, 2: 0.4, 3: 0.6, 4: 0.8, 5: 1.0 };
    globalVolumeMultiplier = volumeMap[state.volume] || 0.6;
  }

  function resetAccessibilitySettings() {
    state.speechRate = 3;
    state.textSize = 3;
    state.volume = 3;
    highContrastEnabled = false;
    el.htmlRoot.classList.remove('highContrast');
    applySpeechRate();
    applyTextSize();
    applyVolume();
  }

  function adjustAccessibilitySetting(delta) {
    const item = currentMenuItems[activeIndex];
    if (!item || !item.settingKey) return;

    const key = item.settingKey;

    if (key === 'highContrast') {
      // Toggle high contrast
      highContrastEnabled = !highContrastEnabled;
      if (highContrastEnabled) {
        el.htmlRoot.classList.add('highContrast');
      } else {
        el.htmlRoot.classList.remove('highContrast');
      }
      playQuantitySound();
      accessibilitySettingsScreen(); // Refresh screen
      const statusText = highContrastEnabled ? t('on') : t('off');
      speakAsync(`${t('highContrastSetting')}, ${statusText}`, { interrupt: true, rememberSpoken: true, rememberPrompt: false });
    } else {
      // Adjust numeric setting (1-5)
      const currentValue = state[key];
      const newValue = clamp(currentValue + delta, 1, 5);
      if (newValue !== currentValue) {
        state[key] = newValue;
        playQuantitySound();

        // Apply the setting immediately
        if (key === 'speechRate') applySpeechRate();
        else if (key === 'textSize') applyTextSize();
        else if (key === 'volume') applyVolume();

        accessibilitySettingsScreen(); // Refresh screen
        const settingName = key === 'speechRate' ? t('speechRate') : key === 'textSize' ? t('textSize') : t('volumeLevel');
        speakAsync(`${settingName}, ${formatNumberForTTS(newValue)}`, { interrupt: true, rememberSpoken: true, rememberPrompt: false });
      }
    }
  }

  function accessibilitySettingsScreen() {
    state.screen = 'accessibilitySettings';

    const savedActiveIndex = activeIndex;

    const menuItems = [
      {
        label: t('speechRate'),
        meta: String(state.speechRate),
        settingKey: 'speechRate',
        hasAdjustable: true,
        onSelect: () => {} // Left/right adjusts
      },
      {
        label: t('textSize'),
        meta: String(state.textSize),
        settingKey: 'textSize',
        hasAdjustable: true,
        onSelect: () => {} // Left/right adjusts
      },
      {
        label: t('volumeLevel'),
        meta: String(state.volume),
        settingKey: 'volume',
        hasAdjustable: true,
        onSelect: () => {} // Left/right adjusts
      },
      {
        label: t('highContrastSetting'),
        meta: highContrastEnabled ? t('on') : t('off'),
        settingKey: 'highContrast',
        hasAdjustable: true,
        onSelect: () => {} // Left/right toggles
      },
      {
        label: t('resetToDefaults'),
        isActionButton: true,
        onSelect: () => {
          resetAccessibilitySettings();
          playConfirmSound();
          accessibilitySettingsScreen();
          speakAsync(t('settingsReset'), { interrupt: true, rememberSpoken: true, rememberPrompt: false });
        }
      },
      {
        label: t('saveAndContinue'),
        isActionButton: true,
        isConfirm: true,
        onSelect: () => {
          playConfirmSound();
          advanceAfterSpeech(t('settingsSaved'), mainMenu);
        }
      }
    ];

    setScreen({
      locationText: t('baltiJaam'),
      stepText: t('accessibilitySettingsTitle'),
      title: t('accessibilitySettingsTitle'),
      prompt: t('textSizeShortcutHint'),
      menuItems,
      focusTitle: false,
      speakPrompt: savedActiveIndex === 0, // Only speak on first entry
    });

    // Restore active index after refresh
    if (savedActiveIndex > 0 && savedActiveIndex < menuItems.length) {
      activeIndex = savedActiveIndex;
      updateActiveVisual();
      focusActiveItem();
    }
  }

  function showVideoCallUI() {
    el.routeMap.innerHTML = `
      <div class="videoCall">
        <div class="videoCall__screen">
          <div class="videoCall__avatar">
            <div class="videoCall__avatarIcon">👤</div>
          </div>
          <div class="videoCall__status" id="videoCallStatus">${t('callingAssistance')}...</div>
          <div class="videoCall__indicator">
            <span class="videoCall__dot videoCall__dot--animate"></span>
            <span class="videoCall__dot videoCall__dot--animate"></span>
            <span class="videoCall__dot videoCall__dot--animate"></span>
          </div>
        </div>
      </div>
    `;
    el.routeMap.classList.add('isVisible');
  }

  function updateVideoCallStatus(statusKey) {
    const statusEl = document.getElementById('videoCallStatus');
    if (statusEl) {
      statusEl.textContent = t(statusKey);
    }
  }

  function contactStaff() {
    state.screen = 'contact';
    const prompt = t('pleaseWaitCalling');

    setScreen({
      locationText: t('baltiJaam'),
      stepText: t('contactStaff'),
      title: t('callingAssistance'),
      prompt,
      menuItems: [
        { label: t('endCall'), meta: t('backspace'), onSelect: () => endCall() }
      ],
      focusTitle: true,
      speakPrompt: false, // We'll speak after starting ring
    });

    // Show video call UI after setScreen (since setScreen hides routeMap by default)
    showVideoCallUI();

    // Start phone ringing and speak prompt
    startPhoneRinging();
    speakAsync(prompt, { interrupt: true, rememberSpoken: true, rememberPrompt: true }).then(() => {
      // After announcement, simulate connection after a delay
      setTimeout(() => {
        if (state.screen === 'contact') {
          stopPhoneRinging();
          playCallConnected();
          updateVideoCallStatus('videoCallInProgress');
          speakAsync(t('staffConnected') + ' ' + t('pressEnterToEndCall'), { interrupt: true, rememberSpoken: true, rememberPrompt: false });
          // Auto-end call after 5 seconds
          setTimeout(() => {
            if (state.screen === 'contact') {
              endCall();
            }
          }, 5000);
        }
      }, 4000);
    });
  }

  function endCall() {
    stopPhoneRinging();
    hideRouteMap();
    speakAsync(t('callEnded'), { interrupt: true, rememberSpoken: true, rememberPrompt: false });
    setTimeout(() => mainMenu(), 500);
  }

  function departureStation() {
    state.screen = 'dep';
    state.departure = state.departure || 'Tallinn';
    activeIndex = 0;

    const instructions = getInstructions();
    const prompt = `${t('chooseDepartureStation')}${instructions ? ' ' + instructions : ''}`;

    const menuItems = data.stations.map((s) => ({
      label: s,
      onSelect: () => {
        state.departure = s;
        advanceAfterSpeech(`${s} ${t('selectedAsDeparture')}`, arrivalStation);
      }
    }));

    // Add help and cancel buttons
    menuItems.push({
      label: t('accessibilityHelp'),
      onSelect: () => accessibilityHelpScreen()
    });
    menuItems.push({
      label: t('cancelTransaction'),
      onSelect: () => cancelTransaction()
    });
    menuItems.push({
      label: t('changeLanguage'),
      onSelect: () => changeLanguageScreen()
    });

    setScreen({
      locationText: t('baltiJaam'),
      stepText: `1/${state.isReturn ? 7 : 6}`,
      title: t('departureStationTitle'),
      prompt,
      menuItems,
      focusTitle: true,
      speakPrompt: true,
      category: t('destinationSelection'),
    });
  }

  function arrivalStation() {
    state.screen = 'arr';
    const arrivals = data.stations.filter((s) => s !== state.departure);
    if (!state.arrival || state.arrival === state.departure) state.arrival = arrivals[0];
    activeIndex = 0;

    const instructions = getInstructions();
    const prompt = `${t('chooseArrivalStation')}${instructions ? ' ' + instructions : ''}`;

    const menuItems = arrivals.map((s) => ({
      label: s,
      onSelect: () => {
        state.arrival = s;
        const departureText = currentLang === 'et' ? stationToElative(state.departure) : state.departure;
        advanceAfterSpeech(`${t('selectedRouteFrom')} ${departureText} ${t('to')} ${state.arrival}.`, returnTicketQuestion);
      }
    }));

    // Add help and cancel buttons
    menuItems.push({
      label: t('accessibilityHelp'),
      onSelect: () => accessibilityHelpScreen()
    });
    menuItems.push({
      label: t('cancelTransaction'),
      onSelect: () => cancelTransaction()
    });
    menuItems.push({
      label: t('changeLanguage'),
      onSelect: () => changeLanguageScreen()
    });

    setScreen({
      locationText: t('baltiJaam'),
      stepText: `1/${state.isReturn ? 7 : 6}`,
      title: t('arrivalStationTitle'),
      prompt,
      menuItems,
      focusTitle: true,
      speakPrompt: true,
      category: t('destinationSelection'),
    });
  }

  function returnTicketQuestion() {
    state.screen = 'return';
    activeIndex = 0;
    const instructions = getInstructions();
    const prompt = `${t('wantReturnTicket')}${instructions ? ' ' + instructions : ''}`;

    const menuItems = [
      {
        label: t('yes'),
        meta: t('returnTicket'),
        onSelect: () => {
          state.isReturn = true;
          playConfirmSound();
          advanceAfterSpeech(`${t('returnTicket')} ${t('selected').toLowerCase()}.`, departureTime);
        }
      },
      {
        label: t('no'),
        meta: t('oneWay'),
        onSelect: () => {
          state.isReturn = false;
          playConfirmSound();
          advanceAfterSpeech(`${t('oneWay')} ${t('selected').toLowerCase()}.`, departureTime);
        }
      }
    ];

    // Add help and cancel buttons
    menuItems.push({
      label: t('accessibilityHelp'),
      onSelect: () => accessibilityHelpScreen()
    });
    menuItems.push({
      label: t('cancelTransaction'),
      onSelect: () => cancelTransaction()
    });
    menuItems.push({
      label: t('changeLanguage'),
      onSelect: () => changeLanguageScreen()
    });

    setScreen({
      locationText: t('baltiJaam'),
      stepText: '2/7',
      title: t('returnTicketTitle'),
      prompt,
      menuItems,
      focusTitle: true,
      speakPrompt: true,
    });
  }

  function departureTime({ speakPrompt = true } = {}) {
    state.screen = 'time';
    const dates = getDates();
    const selectedDate = dates[state.departureDateIndex] || dates[0];
    const selectedTime = data.times[state.departureTimeIndex] || data.times[0];

    state.departureTime = selectedTime.time;
    state.platform = selectedTime.platform;

    const dateLabel = getDateLabel(selectedDate);
    const dateLabelForTTS = formatDateForTTS(dateLabel);
    const instructions = getInstructions();
    const prompt = `${t('chooseDepartureTime')} ${t('useLeftRightDate')}${instructions ? ' ' + instructions : ''}`;

    // Build date display items (visual only, not focusable)
    const dateItems = dates.map((dateObj, idx) => ({
      label: getDateLabel(dateObj),
      isDateDisplay: true,
      isDateSelected: idx === state.departureDateIndex,
      dateIndex: idx,
      onSelect: () => {
        // If somehow Enter is pressed on a date, move focus to first time
        state.departureDateIndex = idx;
        departureTime({ speakPrompt: false });
        activeIndex = dates.length + 1; // Skip dates + separator
        focusActiveItem();
        updateActiveVisual();
      }
    }));

    // Add visual separator
    const separator = {
      label: '─────────────────────────────────────',
      isSeparator: true,
      onSelect: () => {} // Do nothing
    };

    // Build time items (focusable)
    const timeItems = data.times.map((item, idx) => ({
      label: item.time,
      meta: `${t('platform')} ${item.platform}`,
      timeIndex: idx,
      onSelect: () => {
        state.departureTimeIndex = idx;
        state.departureTime = item.time;
        state.platform = item.platform;
        playConfirmSound();
        const nextScreen = state.isReturn ? returnTime : ticketType;
        const timeFormatted = formatTimeForTTS(item.time);
        const platformFormatted = formatNumberForTTS(item.platform);
        advanceAfterSpeech(`${dateLabelForTTS}, ${timeFormatted} ${t('fromPlatform')} ${platformFormatted} ${t('selected').toLowerCase()}.`, nextScreen);
      }
    }));

    // Add help and cancel buttons
    const helpButton = {
      label: t('accessibilityHelp'),
      onSelect: () => accessibilityHelpScreen()
    };
    const cancelButton = {
      label: t('cancelTransaction'),
      onSelect: () => cancelTransaction()
    };

    const changeLangButton = {
      label: t('changeLanguage'),
      onSelect: () => changeLanguageScreen()
    };

    // Combine: dates + separator + times + help + cancel + change language
    const menuItems = [...dateItems, separator, ...timeItems, helpButton, cancelButton, changeLangButton];

    setScreen({
      locationText: t('baltiJaam'),
      stepText: state.isReturn ? '3/7' : '3/6',
      title: `${t('outbound')}: ${t('departureTimeTitle')}`,
      prompt,
      menuItems,
      focusTitle: !speakPrompt,
      speakPrompt,
      hintBarText: t('hintBarTime'),
      category: t('timeAndDate'),
    });

    // Set active index to first time option (after dates + separator)
    if (speakPrompt) {
      activeIndex = dates.length + 1 + state.departureTimeIndex;
      focusActiveItem();
      updateActiveVisual();
    }
  }

  function adjustDepartureDate(delta) {
    if (state.screen !== 'time') return;
    const dates = getDates();
    const newIndex = Math.max(0, Math.min(dates.length - 1, state.departureDateIndex + delta));
    if (newIndex !== state.departureDateIndex) {
      state.departureDateIndex = newIndex;
      playQuantitySound();
      const dateLabel = getDateLabel(dates[newIndex]);
      const dateLabelForTTS = formatDateForTTS(dateLabel);
      speakAsync(dateLabelForTTS, { interrupt: true, rememberSpoken: true, rememberPrompt: false });

      // Re-render to update date highlights and times
      const savedTimeIndex = state.departureTimeIndex;
      departureTime({ speakPrompt: false });

      // Restore focus to same time position (dates + separator + time)
      activeIndex = dates.length + 1 + savedTimeIndex;
      focusActiveItem();
      updateActiveVisual();
    }
  }

  function returnTime({ speakPrompt = true } = {}) {
    state.screen = 'returnTime';
    const dates = getDates();
    // Return date must be same or after departure date
    const minReturnDateIndex = state.departureDateIndex;
    if (state.returnDateIndex < minReturnDateIndex) {
      state.returnDateIndex = minReturnDateIndex;
    }
    const selectedDate = dates[state.returnDateIndex] || dates[minReturnDateIndex];
    const selectedTime = data.times[state.returnTimeIndex] || data.times[0];

    state.returnTime = selectedTime.time;
    state.returnPlatform = selectedTime.platform;

    const dateLabel = getDateLabel(selectedDate);
    const dateLabelForTTS = formatDateForTTS(dateLabel);
    const instructions = getInstructions();
    const prompt = `${t('chooseReturnTime')} ${t('useLeftRightDate')}${instructions ? ' ' + instructions : ''}`;

    // Build date display items (visual only, not focusable)
    const dateItems = dates.map((dateObj, idx) => ({
      label: getDateLabel(dateObj),
      isDateDisplay: true,
      isDateSelected: idx === state.returnDateIndex,
      dateIndex: idx,
      onSelect: () => {
        // If somehow Enter is pressed on a date, move focus to first time
        state.returnDateIndex = idx;
        returnTime({ speakPrompt: false });
        activeIndex = dates.length + 1; // Skip dates + separator
        focusActiveItem();
        updateActiveVisual();
      }
    }));

    // Add visual separator
    const separator = {
      label: '─────────────────────────────────────',
      isSeparator: true,
      onSelect: () => {} // Do nothing
    };

    // Build time items (focusable)
    const timeItems = data.times.map((item, idx) => ({
      label: item.time,
      meta: `${t('platform')} ${item.platform}`,
      timeIndex: idx,
      onSelect: () => {
        // Validate that return time is after departure time if on the same day
        if (state.returnDateIndex === state.departureDateIndex && idx <= state.departureTimeIndex) {
          playErrorSound();
          const errorMessage = currentLang === 'et'
            ? 'Tagasisõidu aeg peab olema pärast väljumisaega.'
            : 'Return time must be after departure time.';
          showErrorAlert(errorMessage);
          speakAsync(errorMessage, { interrupt: true, rememberSpoken: true, rememberPrompt: false });
          return;
        }

        // Valid selection - clear any error alert
        hideErrorAlert();

        state.returnTimeIndex = idx;
        state.returnTime = item.time;
        state.returnPlatform = item.platform;
        playConfirmSound();
        const timeFormatted = formatTimeForTTS(item.time);
        const platformFormatted = formatNumberForTTS(item.platform);
        advanceAfterSpeech(`${dateLabelForTTS}, ${timeFormatted} ${t('fromPlatform')} ${platformFormatted} ${t('selected').toLowerCase()}.`, ticketType);
      }
    }));

    // Add help and cancel buttons
    const helpButton = {
      label: t('accessibilityHelp'),
      onSelect: () => accessibilityHelpScreen()
    };
    const cancelButton = {
      label: t('cancelTransaction'),
      onSelect: () => cancelTransaction()
    };

    const changeLangButton = {
      label: t('changeLanguage'),
      onSelect: () => changeLanguageScreen()
    };

    // Combine: dates + separator + times + help + cancel + change language
    const menuItems = [...dateItems, separator, ...timeItems, helpButton, cancelButton, changeLangButton];

    setScreen({
      locationText: t('baltiJaam'),
      stepText: '4/7',
      title: `${t('returnJourney')}: ${t('returnTimeTitle')}`,
      prompt,
      menuItems,
      focusTitle: !speakPrompt,
      speakPrompt,
      hintBarText: t('hintBarTime'),
      category: t('timeAndDate'),
      isReturnJourney: true,
      titleHasReturnIcon: true,
    });

    // Set active index to first time option (after dates + separator)
    if (speakPrompt) {
      activeIndex = dates.length + 1 + state.returnTimeIndex;
      focusActiveItem();
      updateActiveVisual();
    }
  }

  function adjustReturnDate(delta) {
    if (state.screen !== 'returnTime') return;
    const dates = getDates();
    const minIndex = state.departureDateIndex; // Can't return before departure
    const newIndex = Math.max(minIndex, Math.min(dates.length - 1, state.returnDateIndex + delta));
    if (newIndex !== state.returnDateIndex) {
      state.returnDateIndex = newIndex;
      playQuantitySound();

      // If changing to a different day, the time validation might now be valid - clear error
      if (newIndex !== state.departureDateIndex) {
        hideErrorAlert();
      }

      const dateLabel = getDateLabel(dates[newIndex]);
      const dateLabelForTTS = formatDateForTTS(dateLabel);
      speakAsync(dateLabelForTTS, { interrupt: true, rememberSpoken: true, rememberPrompt: false });

      // Re-render to update date highlights and times
      const savedTimeIndex = state.returnTimeIndex;
      returnTime({ speakPrompt: false });

      // Restore focus to same time position (dates + separator + time)
      activeIndex = dates.length + 1 + savedTimeIndex;
      focusActiveItem();
      updateActiveVisual();
    }
  }

  // Get translated ticket type label
  function getTicketTypeLabel(type) {
    const map = { 'Adult': 'adult', 'Student': 'student', 'Senior': 'senior', 'Child': 'child', 'Disabled': 'disabled' };
    return t(map[type] || type);
  }

  function ticketType({ speakPrompt = true } = {}) {
    state.screen = 'type';
    const totalTickets = getTotalTickets();
    const totalPrice = getTotalPrice();

    const instructions = getInstructions();
    const prompt = `${t('chooseTicketType')} ${t('useLeftRight')}${instructions ? ' ' + instructions : ''}`;

    const menuItems = data.ticketTypes.map((item) => {
      const qty = state.quantities[item.label] || 0;
      const itemTotal = qty * item.price;
      return {
        label: getTicketTypeLabel(item.label),
        meta: qty > 0 ? `${qty} × ${item.price} € = ${itemTotal} €` : `${item.price} € (${t('none')})`,
        ticketLabel: item.label,
        quantity: qty,
        hasQuantity: true,
        onSelect: () => {
          if (getTotalTickets() === 0) {
            // Can't proceed without selecting at least one ticket - show error
            playErrorSound();
            const errorMsg = t('selectAtLeastOneTicket');
            showErrorAlert(errorMsg);
            speakAsync(errorMsg, { interrupt: true, rememberSpoken: true, rememberPrompt: false });
            return;
          }
          playConfirmSound();
          const summary = getSelectedTicketsSummary();
          advanceAfterSpeech(`${summary} ${t('selected').toLowerCase()}.`, review);
        }
      };
    });

    // Add confirm option if tickets are selected
    if (totalTickets > 0) {
      menuItems.push({
        label: t('confirm'),
        meta: `${totalTickets} ${t('tickets')} - ${totalPrice} €`,
        isActionButton: true,
        isConfirm: true,
        onSelect: () => {
          playConfirmSound();
          const summary = getSelectedTicketsSummary();
          advanceAfterSpeech(`${summary} ${t('selected').toLowerCase()}.`, review);
        }
      });
    }

    // Add help and cancel buttons
    menuItems.push({
      label: t('accessibilityHelp'),
      isActionButton: true,
      onSelect: () => accessibilityHelpScreen()
    });
    menuItems.push({
      label: t('cancelTransaction'),
      isActionButton: true,
      onSelect: () => cancelTransaction()
    });
    menuItems.push({
      label: t('changeLanguage'),
      isActionButton: true,
      onSelect: () => changeLanguageScreen()
    });

    setScreen({
      locationText: t('baltiJaam'),
      stepText: state.isReturn ? '5/7' : '4/6',
      title: t('ticketTypeTitle'),
      prompt,
      menuItems,
      focusTitle: !speakPrompt, // Don't focus title when just updating display
      speakPrompt,
      hintBarText: t('hintBarType'),
      category: t('ticketSelection'),
    });

    // Always start at first option when first entering the screen
    if (speakPrompt) {
      activeIndex = 0;
      focusActiveItem();
      updateActiveVisual();
    }
  }

  function adjustQuantity(delta) {
    if (state.screen !== 'type') return;
    const currentItem = currentMenuItems[activeIndex];
    if (!currentItem || currentItem.isConfirm) return; // Don't adjust on confirm button

    const ticketLabel = currentItem.ticketLabel;
    if (!ticketLabel) return;

    const currentQty = state.quantities[ticketLabel] || 0;
    const newQty = Math.max(0, Math.min(10, currentQty + delta));

    if (newQty !== currentQty) {
      const savedIndex = activeIndex;
      state.quantities[ticketLabel] = newQty;
      playQuantitySound();

      // If we now have at least one ticket, clear any error alert
      if (getTotalTickets() > 0) {
        hideErrorAlert();
      }

      const qtyFormatted = newQty === 0 ? t('none') : formatNumberForTTS(newQty);
      speakAsync(qtyFormatted, { interrupt: true, rememberSpoken: true, rememberPrompt: false });
      // Re-render to update display without speaking prompt
      ticketType({ speakPrompt: false });
      // Restore selection position
      activeIndex = savedIndex;
      focusActiveItem();
      updateActiveVisual();
    }
  }

  function review() {
    state.screen = 'review';
    activeIndex = 0;
    const totalTickets = getTotalTickets();
    const totalPrice = getTotalPrice();
    const ticketSummary = getSelectedTicketsSummary();

    // Format numbers for TTS (Estonian uses words, English uses digits)
    const ticketsNum = formatNumberForTTS(totalTickets);
    const priceNum = formatNumberForTTS(totalPrice);
    const timeFormatted = formatTimeForTTS(state.departureTime);
    const platformNum = formatNumberForTTS(state.platform);

    const ticketWord = totalTickets === 1 ? t('ticketsSelected') : t('ticketsSelectedPlural');
    let prompt = `${ticketsNum} ${ticketWord} ${state.departure} ${t('to')} ${state.arrival}, ${timeFormatted}. ${t('platform')} ${platformNum}. ${t('total')}: ${priceNum} ${t('euros')}.`;

    if (state.isReturn) {
      const returnTimeFormatted = formatTimeForTTS(state.returnTime);
      prompt += ` ${t('returnJourney')}: ${returnTimeFormatted}.`;
    }

    const menuItems = [
      {
        label: t('confirmPurchaseBtn'),
        meta: `${totalTickets} ${t('tickets')} - ${totalPrice} €`,
        onSelect: () => {
          playConfirmSound();
          paymentInstruction(); // Go directly to payment
        }
      },
      {
        label: t('addMoreTickets'),
        meta: t('backspace'),
        onSelect: () => ticketType()
      }
    ];

    // Add help and cancel buttons
    menuItems.push({
      label: t('accessibilityHelp'),
      onSelect: () => accessibilityHelpScreen()
    });
    menuItems.push({
      label: t('cancelTransaction'),
      onSelect: () => cancelTransaction()
    });
    menuItems.push({
      label: t('changeLanguage'),
      onSelect: () => changeLanguageScreen()
    });

    setScreen({
      locationText: t('baltiJaam'),
      stepText: state.isReturn ? '6/7' : '5/6',
      title: t('reviewTitle'),
      prompt,
      menuItems,
      focusTitle: true,
      speakPrompt: true,
      category: t('reviewAndPayment'),
    });

    // Show route map immediately on review screen
    showRouteMap(state.departure, state.arrival, state.departureTime, state.platform, totalTickets, totalPrice);
  }

  function confirmPurchaseQuestion() {
    state.screen = 'confirmPurchase';
    const totalTickets = getTotalTickets();
    const totalPrice = getTotalPrice();

    const prompt = `${t('confirmPrompt')} ${totalPrice} ${t('euros')}.`;

    setScreen({
      locationText: t('baltiJaam'),
      stepText: state.isReturn ? '7/7' : '6/6',
      title: t('confirmPurchaseTitle'),
      prompt,
      menuItems: [
        {
          label: t('yesConfirm'),
          meta: `${totalTickets} ${t('tickets')} - ${totalPrice} €`,
          onSelect: () => {
            playConfirmSound();
            confirmPurchase();
          }
        },
        {
          label: t('noGoBack'),
          meta: t('backspace'),
          onSelect: () => goBack()
        },
        {
          label: t('changeLanguage'),
          onSelect: () => changeLanguageScreen()
        }
      ],
      focusTitle: true,
      speakPrompt: true,
    });
  }

  function confirmPurchase() {
    state.screen = 'confirm';
    const totalTickets = getTotalTickets();
    const totalPrice = getTotalPrice();
    const ticketSummary = getSelectedTicketsSummary();
    const dates = getDates();
    const depDateLabel = getDateLabel(dates[state.departureDateIndex]);

    // Format numbers for TTS
    const priceFormatted = formatNumberForTTS(totalPrice);
    const depDateFormatted = formatDateForTTS(depDateLabel);
    const depTimeFormatted = formatTimeForTTS(state.departureTime);
    const platformFormatted = formatNumberForTTS(state.platform);

    let summaryMsg = `${t('totalAmount')} ${priceFormatted} ${t('euros')}. ${t('travellingOnRoute')} ${state.departure} ${t('to')} ${state.arrival}. ${t('outbound')}: ${depDateFormatted}, ${depTimeFormatted} ${t('fromPlatform')} ${platformFormatted}.`;

    if (state.isReturn) {
      const retDateLabel = getDateLabel(dates[state.returnDateIndex]);
      const retDateFormatted = formatDateForTTS(retDateLabel);
      const retTimeFormatted = formatTimeForTTS(state.returnTime);
      const retPlatformFormatted = formatNumberForTTS(state.returnPlatform);
      summaryMsg += ` ${t('returnJourney')}: ${retDateFormatted}, ${retTimeFormatted} ${t('fromPlatform')} ${retPlatformFormatted}.`;
    }

    // Show processing screen
    setScreen({
      locationText: t('baltiJaam'),
      stepText: t('confirmPurchaseTitle'),
      title: t('confirmPurchaseTitle'),
      prompt: summaryMsg,
      menuItems: [],
      focusTitle: true,
      speakPrompt: false,
    });

    // Show route map
    showRouteMap(state.departure, state.arrival, state.departureTime, state.platform, totalTickets, totalPrice);

    // Speak summary and advance to payment
    advanceAfterSpeech(summaryMsg, paymentInstruction, { delayMs: 500 });
  }

  function paymentInstruction() {
    state.screen = 'pay';
    const prompt = t('paymentPrompt');

    setScreen({
      locationText: t('baltiJaam'),
      stepText: t('paymentTitle'),
      title: t('paymentTitle'),
      prompt,
      menuItems: [
        {
          label: t('continueBtn'),
          meta: 'Enter',
          onSelect: () => {
            playPaymentConfirmSound();
            finalMessage();
          }
        },
        {
          label: t('cancelPayment'),
          meta: t('backspace'),
          onSelect: () => {
            cancelTransaction();
          }
        },
        {
          label: t('changeLanguage'),
          onSelect: () => changeLanguageScreen()
        }
      ],
      focusTitle: true,
      speakPrompt: true,
      hintBarText: t('hintBarPayment'),
    });
  }

  function finalMessage() {
    state.screen = 'done';

    // Add time until departure if departing today
    const timeUntil = getTimeUntilDeparture();
    const msg = timeUntil
      ? `${t('thankYou')} ${timeUntil} ${t('whereToGo')}`
      : `${t('thankYou')} ${t('whereToGo')}`;

    // Play completion sound
    playCompletionSound();

    setScreen({
      locationText: t('baltiJaam'),
      stepText: t('completed'),
      title: t('completedTitle'),
      prompt: `${msg} ${t('chooseDestination')}`,
      menuItems: [
        {
          label: `${t('myPlatform')} (${state.platform})`,
          onSelect: () => showDirections('platform')
        },
        {
          label: `${t('selver')} 🛒`,
          onSelect: () => showDirections('selver')
        },
        {
          label: `${t('hesburger')} 🍔`,
          onSelect: () => showDirections('hesburger')
        },
        {
          label: `${t('pirukabaar')} 🥧`,
          onSelect: () => showDirections('pirukabaar')
        },
        {
          label: t('cafeteria'),
          onSelect: () => showDirections('cafeteria')
        },
        {
          label: t('bathroom'),
          onSelect: () => showDirections('bathroom')
        },
        {
          label: t('stationExit'),
          onSelect: () => showDirections('exit')
        },
        {
          label: t('changeLanguage'),
          onSelect: () => changeLanguageScreen()
        }
      ],
      focusTitle: true,
      speakPrompt: true,
    });
  }

  function getPlatformDirections(platformNum) {
    const key = `platformDirections${platformNum}`;
    return t(key);
  }

  function showDirections(destination) {
    state.screen = 'directions';
    let directions;
    let titleText;

    switch (destination) {
      case 'platform':
        directions = getPlatformDirections(state.platform);
        titleText = `${t('platform')} ${state.platform}`;
        break;
      case 'cafeteria':
        directions = t('cafeteriaDirections');
        titleText = t('cafeteria');
        break;
      case 'bathroom':
        directions = t('bathroomDirections');
        titleText = t('bathroom');
        break;
      case 'exit':
        directions = t('exitDirections');
        titleText = t('stationExit');
        break;
      case 'selver':
        directions = t('selverDirections');
        titleText = t('selver');
        break;
      case 'hesburger':
        directions = t('hesburgerDirections');
        titleText = t('hesburger');
        break;
      case 'pirukabaar':
        directions = t('pirukabaarDirections');
        titleText = t('pirukabaar');
        break;
      default:
        directions = '';
        titleText = '';
    }

    // Special handling for pirukabaar: play fanfare and announce special
    if (destination === 'pirukabaar') {
      const specialMsg = `${t('pirukabaarSpecial')} ${directions} ${t('haveNiceJourney')}`;

      setScreen({
        locationText: t('baltiJaam'),
        stepText: t('completed'),
        title: titleText,
        prompt: specialMsg,
        menuItems: [
          {
            label: t('back'),
            meta: t('backspace'),
            onSelect: () => finalMessage()
          },
          {
            label: t('restartDemo'),
            meta: 'Enter',
            onSelect: () => {
              speechEnabled = true;
              resetState();
              languageScreen();
            }
          },
          {
            label: t('changeLanguage'),
            onSelect: () => changeLanguageScreen()
          }
        ],
        focusTitle: true,
        speakPrompt: false, // Don't speak yet - wait for fanfare
      });

      // Play fanfare, then speak after it completes
      playFanfareSound().then(() => {
        speakAsync(specialMsg, { interrupt: true, rememberSpoken: true, rememberPrompt: true });
        // Turn speech off after announcing directions
        setTimeout(() => { speechEnabled = false; }, 250);
      });

      return;
    }

    // Standard handling for other destinations
    const msg = `${directions} ${t('haveNiceJourney')}`;

    setScreen({
      locationText: t('baltiJaam'),
      stepText: t('completed'),
      title: titleText,
      prompt: msg,
      menuItems: [
        {
          label: t('back'),
          meta: t('backspace'),
          onSelect: () => finalMessage()
        },
        {
          label: t('restartDemo'),
          meta: 'Enter',
          onSelect: () => {
            speechEnabled = true;
            resetState();
            languageScreen();
          }
        },
        {
          label: t('changeLanguage'),
          onSelect: () => changeLanguageScreen()
        }
      ],
      focusTitle: true,
      speakPrompt: true,
    });

    // Turn speech off after announcing directions
    setTimeout(() => { speechEnabled = false; }, 250);
  }

  function cancelTransaction() {
    state.screen = 'cancelled';
    resetState();
    advanceAfterSpeech(t('transactionCancelled'), mainMenu, { delayMs: 500 });
  }

  function goBack() {
    switch (state.screen) {
      case 'lang':
        // Can't go back from language selection
        return;
      case 'changeLang':
        returnFromLanguageChange();
        return;
      case 'boot':
        languageScreen();
        return;
      case 'main':
        bootScreen();
        return;
      case 'na':
        mainMenu();
        return;
      case 'accessibilitySettings':
        mainMenu();
        return;
      case 'contact':
        endCall();
        return;
      case 'dep':
        mainMenu();
        return;
      case 'arr':
        departureStation();
        return;
      case 'return':
        arrivalStation();
        return;
      case 'time':
        returnTicketQuestion();
        return;
      case 'returnTime':
        departureTime();
        return;
      case 'type':
        if (state.isReturn) {
          returnTime();
        } else {
          departureTime();
        }
        return;
      case 'review':
        ticketType();
        return;
      case 'confirmPurchase':
        // Unused in new flow, but keep for safety
        review();
        return;
      case 'confirm':
        // Unused in new flow, but keep for safety
        return;
      case 'pay':
        // Go back to review instead of cancelling
        review();
        return;
      case 'done':
        // stay on destination menu
        return;
      case 'directions':
        finalMessage();
        return;
      default:
        mainMenu();
    }
  }

  // Toggle TTS function
  function toggleTTS() {
    speechEnabled = !speechEnabled;
    const message = speechEnabled ? t('ttsEnabled') : t('ttsDisabled');

    // Play appropriate sound effect
    if (speechEnabled) {
      playTTSOnSound();
    } else {
      // Immediately stop any ongoing speech
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      playTTSOffSound();
    }

    // Always update the screen reader live region
    el.srLive.textContent = message;

    // If enabling TTS, speak the message
    if (speechEnabled) {
      speakAsync(message, { interrupt: true, rememberSpoken: false, rememberPrompt: false });
    }
  }

  // Key handling
  document.addEventListener('keydown', (e) => {
    const key = e.key;

    // Toggle TTS
    if (key === 's' || key === 'S') {
      e.preventDefault();
      toggleTTS();
      return;
    }

    // Toggle high contrast
    if (key === 'c' || key === 'C') {
      e.preventDefault();
      toggleHighContrast();
      return;
    }

    // Toggle keyboard help
    if (key === 'h' || key === 'H') {
      e.preventDefault();
      toggleKeyboardHelp();
      return;
    }

    // Repeat prompt
    if (key === 'r' || key === 'R') {
      e.preventDefault();
      repeatLast();
      return;
    }

    // Global text size adjustment with +/-
    if (key === '+' || key === '=' || key === 'NumpadAdd') {
      e.preventDefault();
      if (state.textSize < 5) {
        state.textSize++;
        applyTextSize();
        playQuantitySound();
        speakAsync(`${t('textSize')}, ${formatNumberForTTS(state.textSize)}`, { interrupt: true, rememberSpoken: false, rememberPrompt: false });
      }
      return;
    }
    if (key === '-' || key === '_' || key === 'NumpadSubtract') {
      e.preventDefault();
      if (state.textSize > 1) {
        state.textSize--;
        applyTextSize();
        playQuantitySound();
        speakAsync(`${t('textSize')}, ${formatNumberForTTS(state.textSize)}`, { interrupt: true, rememberSpoken: false, rememberPrompt: false });
      }
      return;
    }

    // Number keys 1-9: activate the Nth focusable menu item directly
    const numKey = parseInt(key, 10);
    if (numKey >= 1 && numKey <= 9) {
      e.preventDefault();
      // Build list of focusable item indices (skip date displays and separators)
      const focusable = currentMenuItems
        .map((item, idx) => ({ item, idx }))
        .filter(({ item }) => !item.isDateDisplay && !item.isSeparator);
      const target = focusable[numKey - 1];
      if (target) {
        playSelectSound();
        activateIndex(target.idx);
      }
      return;
    }

    // Start shortcut: Enter on boot
    if (key === 'Enter') {
      e.preventDefault();
      playSelectSound();
      activateIndex(activeIndex);
      return;
    }

    // On accessibility settings screen, left/right adjusts values
    if (state.screen === 'accessibilitySettings') {
      if (key === 'ArrowLeft') {
        e.preventDefault();
        adjustAccessibilitySetting(-1);
        return;
      }
      if (key === 'ArrowRight') {
        e.preventDefault();
        adjustAccessibilitySetting(1);
        return;
      }
      // Up/down navigates menu
      if (key === 'ArrowDown') {
        e.preventDefault();
        moveActive(1);
        return;
      }
      if (key === 'ArrowUp') {
        e.preventDefault();
        moveActive(-1);
        return;
      }
    }

    // On ticket type screen, left/right adjusts quantity
    if (state.screen === 'type') {
      if (key === 'ArrowLeft') {
        e.preventDefault();
        adjustQuantity(-1);
        return;
      }
      if (key === 'ArrowRight') {
        e.preventDefault();
        adjustQuantity(1);
        return;
      }
      // Up/down navigates menu on ticket type screen
      if (key === 'ArrowDown') {
        e.preventDefault();
        moveActive(1);
        return;
      }
      if (key === 'ArrowUp') {
        e.preventDefault();
        moveActive(-1);
        return;
      }
    } else if (state.screen === 'time') {
      // Departure time screen: left/right changes date, up/down changes time
      if (key === 'ArrowLeft') {
        e.preventDefault();
        adjustDepartureDate(-1);
        return;
      }
      if (key === 'ArrowRight') {
        e.preventDefault();
        adjustDepartureDate(1);
        return;
      }
      if (key === 'ArrowDown') {
        e.preventDefault();
        moveActive(1);
        return;
      }
      if (key === 'ArrowUp') {
        e.preventDefault();
        moveActive(-1);
        return;
      }
    } else if (state.screen === 'returnTime') {
      // Return time screen: left/right changes date, up/down changes time
      if (key === 'ArrowLeft') {
        e.preventDefault();
        adjustReturnDate(-1);
        return;
      }
      if (key === 'ArrowRight') {
        e.preventDefault();
        adjustReturnDate(1);
        return;
      }
      if (key === 'ArrowDown') {
        e.preventDefault();
        moveActive(1);
        return;
      }
      if (key === 'ArrowUp') {
        e.preventDefault();
        moveActive(-1);
        return;
      }
    } else {
      // Other screens: all arrows navigate menu
      if (key === 'ArrowDown' || key === 'ArrowRight') {
        e.preventDefault();
        moveActive(1);
        return;
      }

      if (key === 'ArrowUp' || key === 'ArrowLeft') {
        e.preventDefault();
        moveActive(-1);
        return;
      }
    }

    if (key === 'Backspace') {
      e.preventDefault();
      goBack();
      return;
    }
  });

  // Start
  window.addEventListener('load', () => {
    // Start with language selection
    languageScreen();
  });

})();
