modules.define('box', ['i-bem-dom'], function (provide, bemDom) {

    provide(bemDom.declBlock(this.name, {}, {
        lazyInit : true,
        onInit : function() {
            this._domEvents('switcher').on('click', function () {
                this.setMod('closed', 'yes');
            });
        }
    }));
});


