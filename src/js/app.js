define(['jquery','bootstrap','domReady!'], function($) {
    return {
        modalOpen: function() {
            $(function () {
                $('#myModal').modal('show');
            });
        },
        deleteRow: function (btn) {
            var row = btn.parentNode.parentNode;
            row.parentNode.removeChild(row);
            var initialCount = parseInt(document.getElementById('rows-count').innerText);
            document.getElementById('rows-count').innerText = initialCount - 1
        },
        adjustCover: function (flag) {
            var value = parseInt(document.getElementById('data-covers').value, 10);
            value = isNaN(value) ? 0 : value;
            if (flag == false && value == 1) return false;
            flag == true ? value++ : value--;
            document.getElementById('data-covers').value = value;
        },
        countRows: (function() {
            var rowsCount;
            rowsCount = document.getElementById('content-table').rows[0].cells.length -1;
            document.getElementById('rows-count').innerText = rowsCount;
        })(),
        sortData: function(ascending, columnClassName, tableId, _this) {

            if ($(_this).hasClass('up')) {
                ascending = true;
            }
            if ($(_this).hasClass('down')) {
                ascending = false;
            }
            var tbody = document.getElementById(tableId).getElementsByTagName("tbody")[0];
            var rows = tbody.getElementsByTagName("tr");

            var unsorted = true;

            while (unsorted) {
                unsorted = false;

                for (var r = 0; r < rows.length - 1; r++) {
                    var row = rows[r];
                    var nextRow = rows[r + 1];
                    var value = row.getElementsByClassName(columnClassName)[0].innerHTML;
                    var nextValue = nextRow.getElementsByClassName(columnClassName)[0].innerHTML;

                    value = value.replace(',', '');
                    nextValue = nextValue.replace(',', '');

                    if (!isNaN(value)) {
                        value = parseFloat(value);
                        nextValue = parseFloat(nextValue);
                    }


                    if (ascending ? value > nextValue : value < nextValue) {
                        if(ascending == true) {
                            var el = _this;
                            addClass(el, 'down');
                            removeClass(el, 'up');
                        }
                        else {
                            el = _this;
                            addClass(el, 'up');
                            removeClass(el, 'down');
                        }
                        tbody.insertBefore(nextRow, row);
                        unsorted = true;
                    }
                }
            }

            function addClass(el, className) {
                if (el.classList)
                    el.classList.add(className);
                else if (!$(_this).hasClass(className)) el.className += " " + className
            }

            function removeClass(el, className) {
                if (el.classList)
                    el.classList.remove(className);
                else if ($(_this).hasClass(className)) {
                    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
                    el.className=el.className.replace(reg, ' ')
                }
            }
        }
    };
});