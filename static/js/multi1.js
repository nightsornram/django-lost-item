myOptions = [
    { label: 'Options 1', value: '1', alias: 'custom label for search', classNames: 'customClassNames', },
    { label: 'Options 2', value: '2', description: 'custom description for label', customData: '' },
    { label: 'Options 3', value: '3' },
    { label: 'Options 100000', value: '100000' },
  ]

  VirtualSelect.init({
    ele: '#example-select',
    options: myOptions
  });
  VirtualSelect.init({ 
    ele: 'select' 
  });
  VirtualSelect.init({
    ele: '#example-select',
    options: myOptions,
    multiple: true
  });
  VirtualSelect.init({
    ele: '#example-select',
    options: myOptions,
    search: true,
    searchGroup: false, // Include group title for searching
    searchByStartsWith: false, // Search options by startsWith() method
  });
  VirtualSelect.init({
    ele: '#example-select',
    options: myOptions,
    placeholder: 'Select options here'
  });
  VirtualSelect.init({
    ele: '#example-select',
    options: myOptions,
    disabledOptions: [1, 1000, 10000]
  });
  VirtualSelect.init({
    ele: '#example-select',
    options: myOptions,
    hideClearButton: true
  });
  VirtualSelect.init({
    // parent element to render dropbox. (self, body, or any css selectror)
    dropboxWrapper: 'self',
    // No.of options to show on viewport
    optionsCount: 5,
    // if has options descriptions
    hasOptionDescription: false,
    // disable select all
    disableSelectAll: false,
    // Height of option
    optionHeight: '40px',
    // top, bottom, auto
    position: 'auto',
    // disable dropdown
    disabled: false,
    // enable required validation.
    required: false,
    // disable required validation
    disableValidation: false,
    // use Group's value
    useGroupValue: false,
    // autofocus dropdown on load
    autofocus: false,
    // Text to show when no options to show
    noOptionsText: 'No results found',
    // Text to show when no results on search
    noSearchResultsTex: 'No results found',
    // Text to show near select all checkbox when search is disabled
    selectAllText: 'Select all',
    // Text to show as placeholder for search input
    searchPlaceholderText: 'Search...', 
    // Text to use when displaying no.of values selected text (i.e. 3 options selected)
    optionsSelectedText: 'options selected',
    // Text to use when displaying no.of values selected text and only one value is selected (i.e. 1 option selected)
    optionSelectedText: 'option selected',
    // Text to use when displaying all values selected text (i.e. All (10))
    allOptionsSelectedText: 'All',
    
    // By default, when all values selected "All (10)" value text would be shown. 
    // Set true to show value text as "10 options selected".
    disableAllOptionsSelectedText: false,
    // By default, no.of options selected text would be shown when there is no enough space to show all selected values. 
    // Set true to override this.
    alwaysShowSelectedOptionsCount: false,
    // By default, no.of options selected text would be shown when there is no enough space to show all selected values. 
    // Set true to show labels even though there is no enough space.
    alwaysShowSelectedOptionsLabel: false,
    // Show each selected values as tags with remove icon
    showValueAsTags: false,
    // For right-to-left text direction languages
    textDirection: 'ltr',
    // Disable option group title checkbox
    disableOptionGroupCheckbox: false,
    // Set true to replace HTML tags from option's text (value and label) to prevent XSS attack. 
    // This feature is not enabled by default to avoid performance issue.
    enableSecureText: false,
    // Set value for hidden input in array format (e.g. '["1", "2"]')
    setValueAsArray: false,
    // Empty value to use for hidden input when no value is selected (e.g. 'null' or '[]' or 'none')
    emptyValue: '',
    // allows you to add new options
    allowNewOption: true,
    // select first option by default on load
    autoSelectFirstOption: false,
    // Single value or array of values to select on init
    selectedValue: '',
    // To avoid "change event" trigger on setting initial value
    silentInitialValueSet: false,
    // Custom width
    dropboxWidth: null,
    // CSS z-index
    zIndex: 1,
    // additional CSS classes
    additionalClasses: '',
    // Maximum no.of values to show in the tooltip for multi-select
    noOfDisplayValues: 50,
    // Mark matched term in label
    markSearchResults: false,
    // Font size for tooltip
    tooltipFontSize: '14px',
    // CSS Text alignment for tooltip
    tooltipAlignment: 'center',
    // max width of tooltip
    tooltipMaxWidth: '300px',
    // Show selected options at the top of the dropbox
    showSelectedOptionsFirst: false,
    // Tooltip text for clear button
    clearButtonText: 'clear',
    // Text to show when more than noOfDisplayValues options selected (i.e + 10 more...)
    moreText: 'more...',
    // name attribute for hidden input
    name: '',
    // keep dropbox always open with fixed height
    keepAlwaysOpen: false,
    // maximum number of options allowed to select
    maxValues: 0,
    // minimum no.of options should be selected to succeed required validation
    minValues: 0,
    // show dropbox as popup on small screen like mobile
    showDropboxAsPopup: true,
    // maximum screen width that allowed to show dropbox as popup
    popupDropboxBreakpoint: '576px',
    // left, center, or right
    popupPosition: 'center',
    // hide value tooltip if all options selected
    hideValueTooltipOnSelectAll: true,
    // Callback function to integrate server search
    onServerSearch: function(){},	
    // Callback function to render label, which could be used to add image, icon, or custom content
    labelRenderer: function(){},	
    // Delay time in milliseconds to trigger onServerSearch callback function
    searchDelay: 300,
    // ID of the label element to use as a11y attribute aria-labelledby
    ariaLabelledby: '',
    // show options to select only if search value is not empty
    showOptionsOnlyOnSearch: false,
    // Select only visible options on clicking select all checkbox when options filtered by search
    showOptionsOnlyOnSearch: false,
    // Maximum width
    maxWidth: '250px',
    // throttle time for updating dropbox position on scroll event
    updatePositionThrottle: 100,
    
  });