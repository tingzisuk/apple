;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-pingguo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M644.48 205.184c49.344-57.472 44.864-142.528 44.864-142.528S605.12 70.464 555.808 128c-49.344 57.376-44.864 142.592-44.864 142.592S595.136 262.72 644.48 205.184L644.48 205.184zM751.456 536.832c0-72.544 40-135.744 98.976-168.576-41.216-59.52-113.728-92.48-164.096-92.48-60.576 0-144.032 42.784-168.256 42.784-25.728 0-79.648-38.688-151.488-39.744-59.328-0.864-159.008 33.632-193.888 135.968-34.848 102.24-33.216 250.08 39.712 387.424 58.496 109.984 110.208 154.528 160.224 154.528 50.08 0 109.088-38.208 156.096-38.208 46.944 0 90.912 38.208 139.424 38.208 48.416 0 98.432-39.776 134.784-94.688 36.352-55.04 69.76-140.512 69.76-140.512s0.192-2.24 0.672-5.504C802.048 688.192 751.456 618.496 751.456 536.832L751.456 536.832zM751.456 536.832"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M920.630724 923.502122c-10.476609 10.289344-27.504424 10.289344-37.981033 0L667.709341 711.968357c-59.987233 47.863101-136.334062 76.680427-219.584114 76.680427C255.473509 788.648784 99.282191 634.954333 99.282191 445.282482 99.282191 255.67817 255.473509 101.986789 448.125227 101.986789c192.674231 0 348.866572 153.691381 348.866572 343.295694 0 88.678692-34.458813 169.242566-90.515526 230.132354l214.153428 210.700793C931.110403 896.448976 931.110403 913.14524 920.630724 923.502122L920.630724 923.502122 920.630724 923.502122zM448.125227 154.852834c-162.978908 0-295.215652 130.067334-295.215652 290.428625 0 160.453389 132.236743 290.523793 295.215652 290.523793 163.072029 0 295.239188-130.070404 295.239188-290.523793C743.364415 284.921191 611.19828 154.852834 448.125227 154.852834L448.125227 154.852834 448.125227 154.852834zM448.125227 154.852834"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-s" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M862.71671 1019.416612 193.694467 1019.416612c-27.101241 0-49.157583-22.056342-49.157583-49.157583L144.536884 320.885288c0-27.101241 22.056342-49.157583 49.157583-49.157583l669.022243 0c27.101241 0 49.157583 22.056342 49.157583 49.157583l0 649.372717C911.874293 997.36027 889.817951 1019.416612 862.71671 1019.416612zM193.694467 320.486198l-0.399089 649.77283 669.421332 0.399089c0.217964 0 0.399089-0.181125 0.399089-0.399089L863.115799 320.885288 193.694467 320.486198z"  ></path>' +
    '' +
    '<path d="M276.608875 299.04691l-49.339732-4.743024C243.191788 128.512932 374.670262 3.494591 533.10569 3.494591c153.426345 0 284.409538 120.589472 304.699654 280.501532l-49.169863 6.243191C771.491009 155.021679 661.632949 53.052287 533.10569 53.052287 400.332734 53.052287 290.063305 158.808936 276.608875 299.04691z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)